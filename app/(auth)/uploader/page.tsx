"use client";
import { UploadQueueItem } from "@/types/UploadQueueItem";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const UploaderPage = () => {
  const [uploadQueue, setUploadQueue] = useState<UploadQueueItem[]>([]);
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
  ]);
  const [artists] = useState<string[]>([
    "Maria Rodriguez",
    "John Smith",
    "Elena Kim",
    "Alex Wong",
  ]);
  const [cards] = useState<string[]>([
    "Climate Action Card",
    "Economic Impact Card",
    "Biodiversity Card",
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log({ uploadQueue });
  }, [uploadQueue]);
  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newFiles: UploadQueueItem[] = Array.from(event.target.files).map(
      (file) => ({
        file,
        id: `${Date.now()}-${file.name}`,
        name: file.name,
        language: "",
        cardName: "",
        artist: "",
        progress: 0,
        status: "pending",
      })
    );

    setUploadQueue([...uploadQueue, ...newFiles]);
  };

  // Drag and drop file handling
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const droppedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      file,
      id: `${Date.now()}-${file.name}`,
      name: file.name,
      language: "",
      cardName: "",
      artist: "",
      progress: 0,
      status: "pending",
    }));

    setUploadQueue([...uploadQueue, ...droppedFiles]);
  };

  // Update individual file metadata
  const updateFileMetadata = (id: string, field: string, value: string) => {
    setUploadQueue(
      uploadQueue.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Remove file from upload queue
  const removeFile = (id: string) => {
    setUploadQueue(uploadQueue.filter((item) => item.id !== id));
  };

  // Simulate file upload
  const uploadFiles = () => {
    const updatedQueue = uploadQueue.map((item) => {
      // Validate all required fields are filled
      if (!item.language || !item.cardName || !item.artist) {
        return { ...item, status: "error", progress: 0 };
      }

      // Simulate upload progress
      return {
        ...item,
        status: "uploading",
        progress: 0,
      };
    });

    setUploadQueue(updatedQueue);

    // Simulated upload process
    uploadQueue.forEach((item, index) => {
      if (item.language && item.cardName && item.artist) {
        setTimeout(() => {
          setUploadQueue((prev) =>
            prev.map((file, idx) =>
              idx === index
                ? { ...file, status: "completed", progress: 100 }
                : file
            )
          );
        }, 2000 + Math.random() * 2000);
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Image Uploader</h1>

      {/* Drag and Drop Area */}
      <div
        className="border-2 border-dashed border-gray-300 p-10 text-center mb-6 hover:bg-gray-50 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current!.click()}
      >
        <input
          type="file"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
        />
        <p className="text-gray-500">
          Drag and drop images here, or click to select files
        </p>
      </div>

      {/* Upload Queue */}
      {uploadQueue.length > 0 && (
        <div className="bg-white shadow rounded">
          <h2 className="text-xl p-4 border-b">Upload Queue</h2>
          {uploadQueue.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b flex items-center space-x-4"
            >
              {/* File Preview */}
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center">
                <Image
                  width={300}
                  height={300}
                  src={URL.createObjectURL(item.file)}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Metadata Inputs */}
              <div className="flex-grow grid grid-cols-3 gap-4">
                <select
                  value={item.language}
                  onChange={(e) =>
                    updateFileMetadata(item.id, "language", e.target.value)
                  }
                  className="border p-2 rounded"
                >
                  <option value="">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>

                <select
                  value={item.cardName}
                  onChange={(e) =>
                    updateFileMetadata(item.id, "cardName", e.target.value)
                  }
                  className="border p-2 rounded"
                >
                  <option value="">Select Card</option>
                  {cards.map((card) => (
                    <option key={card} value={card}>
                      {card}
                    </option>
                  ))}
                </select>

                <select
                  value={item.artist}
                  onChange={(e) =>
                    updateFileMetadata(item.id, "artist", e.target.value)
                  }
                  className="border p-2 rounded"
                >
                  <option value="">Select Artist</option>
                  {artists.map((artist) => (
                    <option key={artist} value={artist}>
                      {artist}
                    </option>
                  ))}
                </select>
              </div>

              {/* Progress and Actions */}
              <div className="w-32 flex items-center space-x-2">
                {item.status === "pending" && (
                  <div className="text-yellow-500">Pending</div>
                )}
                {item.status === "uploading" && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                )}
                {item.status === "completed" && (
                  <div className="text-green-500">Completed</div>
                )}
                {item.status === "error" && (
                  <div className="text-red-500">Error</div>
                )}
                <button
                  onClick={() => removeFile(item.id)}
                  className="text-red-500 hover:bg-red-50 p-1 rounded"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Upload Button */}
          <div className="p-4 text-right">
            <button
              onClick={uploadFiles}
              disabled={uploadQueue.some(
                (item) => !item.language || !item.cardName || !item.artist
              )}
              className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
            >
              Upload Files
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploaderPage;

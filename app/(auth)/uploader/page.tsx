"use client";
import { UploadQueueItem } from "@/types/UploadQueueItem";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { apiUrl } from "@/redux/apiConfig";
import { addImages } from "@/redux/slices/images.slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const UploaderPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [uploadQueue, setUploadQueue] = useState<UploadQueueItem[]>([]);
  const [isAvailable, setIsAvailable] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let flag = true;
    for (const item of uploadQueue) {
      if (item.status != "completed") {
        flag = false;
      }
    }
    setIsAvailable(flag);
  }, [uploadQueue]);
  useEffect(() => {
    console.log({ isAvailable });
  }, [isAvailable]);
  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newFiles: UploadQueueItem[] = Array.from(event.target.files).map(
      (file) => ({
        file,
        id: `${Date.now()}-${file.name}`,
        name: file.name,
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
      progress: 0,
      status: "pending",
    }));

    setUploadQueue([...uploadQueue, ...droppedFiles]);
  };

  // Remove file from upload queue
  const removeFile = (id: string) => {
    setUploadQueue(uploadQueue.filter((item) => item.id !== id));
  };

  const uploadFiles = async () => {
    for (const fileItem of uploadQueue) {
      if (fileItem.status != "completed") {
        const formData = new FormData();
        formData.append("file", fileItem.file);
        formData.append("name", fileItem.id);

        try {
          setUploadQueue((prevQueue) =>
            prevQueue.map((item) =>
              item.id === fileItem.id
                ? { ...item, status: "uploading", progress: 0 }
                : item
            )
          );

          const response = await axios.post(
            `${apiUrl}/api/image/upload`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                  const progress = Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  );
                  setUploadQueue((prevQueue) =>
                    prevQueue.map((item) =>
                      item.id === fileItem.id ? { ...item, progress } : item
                    )
                  );
                }
              },
            }
          );

          const result = response.data;
          console.log(result);
          if (result.success) {
            dispatch(addImages(result.image));
            console.log("Hello");
            setUploadQueue((prevQueue) =>
              prevQueue.map((item) =>
                item.id === fileItem.id
                  ? { ...item, status: "completed", progress: 100 }
                  : item
              )
            );
          } else {
            setUploadQueue((prevQueue) =>
              prevQueue.map((item) =>
                item.id === fileItem.id
                  ? { ...item, status: "error", progress: 0 }
                  : item
              )
            );
          }
        } catch (error) {
          setUploadQueue((prevQueue) =>
            prevQueue.map((item) =>
              item.id === fileItem.id
                ? { ...item, status: "error", progress: 0 }
                : item
            )
          );
        }
      }
    }
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
          <div className="grid grid-cols-6 gap-8">
            {uploadQueue.map((item) => (
              <div
                key={item.id}
                className="p-4 border-b flex items-center justify-center space-x-4 flex-col"
              >
                {/* File Preview */}
                <div className="bg-gray-100 flex items-center justify-center">
                  <Image
                    width={300}
                    height={300}
                    src={URL.createObjectURL(item.file)}
                    alt="Preview"
                    className="w-48 h-48"
                  />
                </div>
                <div className="">{item.name}</div>
                {/* Progress and Actions */}
                <div className="w-fit flex items-center space-x-2">
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
          </div>
          {/* Upload Button */}
          <div className="p-4 text-right">
            <button
              onClick={uploadFiles}
              disabled={isAvailable}
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

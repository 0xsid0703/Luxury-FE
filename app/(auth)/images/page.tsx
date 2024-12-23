"use client";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { ReplaceIcon } from "@/components/icons/ReplaceIcon";
import { toast } from "@/hooks/use-toast";
import { apiUrl } from "@/redux/apiConfig";
import { deleteImage, updateImages } from "@/redux/slices/images.slice";
import { AppDispatch, RootState } from "@/redux/store";
import { ImageState, ImageType } from "@/types/ImageType";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ImagePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const images: ImageState = useSelector<RootState, ImageState>(
    (state) => state.images
  );
  const fileInputRef = useRef<(HTMLInputElement | null)[]>([]);
  const handleDelete = (id: number) => {
    dispatch(deleteImage(id))
      .then(() => {
        toast({ description: "Image was deleted successfully!" });
      })
      .catch(() => {
        toast({ description: "Image was deleted successfully!" });
      });
  };
  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (!event.target.files) return;

    const formData = new FormData();

    formData.append("file", event.target.files[0]);
    formData.append("name", event.target.files[0].name);

    try {
      const response = await axios.put(`${apiUrl}/api/image/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // onUploadProgress: (progressEvent) => {
        //   if (progressEvent.total) {
        //     const progress = Math.round(
        //       (progressEvent.loaded / progressEvent.total) * 100
        //     );
        //   }
        // },
      });

      const result = response.data;
      if (result.success) {
        dispatch(updateImages(result.image));
        toast({ description: "Image was updated successfully!" });
      } else {
        toast({ description: "Failed to update image" });
      }
    } catch (error) {
      toast({ description: "Failed to update image" });
    }
  };
  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Image Management</h1>
      <div className="mb-4">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => router.push("/uploader")}
        >
          Upload New Image
        </button>
      </div>
      <div className="grid grid-cols-6 gap-10">
        {images.status === "succeeded" &&
          images.images.length > 0 &&
          images.images.map((image: ImageType, index: number) => (
            <div className="w-full h-full relative group shadow-lg" key={index}>
              <Image
                width={300}
                height={300}
                src={`${apiUrl}/images/${image.name}`}
                alt=""
              />
              <div className="absolute bottom-0 h-16 bg-black bg-opacity-30 group-hover:grid hidden w-full grid-cols-2 divide-x">
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => fileInputRef.current[index]!.click()}
                  >
                    <input
                      type="file"
                      className="hidden"
                      ref={(el) => {
                        fileInputRef.current[index] = el;
                      }}
                      onChange={(e) => handleFileSelect(e, image.id)}
                      accept="image/*"
                    />
                    <ReplaceIcon />
                  </div>
                </div>
                <div
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                  onClick={() => handleDelete(image.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagePage;

"use client";
import { apiUrl } from "@/redux/apiConfig";
import { RootState } from "@/redux/store";
import { ImageState, ImageType } from "@/types/ImageType";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ImagePage = () => {
  const images: ImageState = useSelector<RootState, ImageState>(
    (state) => state.images
  );
  useEffect(() => {
    console.log({ images });
  });
  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Image Management</h1>
      <div className="grid grid-cols-6 gap-10">
        {images.status === "succeeded" &&
          images.images.length > 0 &&
          images.images.map((image: ImageType, index: number) => (
            <div className="w-full h-full" key={index}>
              <Image
                width={300}
                height={300}
                src={`${apiUrl}/images/${image.name}`}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagePage;

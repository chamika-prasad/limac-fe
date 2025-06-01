import React from "react";
import "./index.scss";

interface IImageGellaryProps {
  images: string | string[];
}

export const ImageGellary = ({ images }: IImageGellaryProps) => {
  const imageArray = typeof images === "string" ? [images] : images;

  return (
    <div className="image-gellary-wrapper">
      {imageArray.map((image, index) => (
        <div className="image-wrapper" key={index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

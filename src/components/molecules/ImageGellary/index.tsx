// ImageGallery.tsx
import React from "react";
import Image from "next/image";
import "./index.scss";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  return (
    <div className={`gallery ${className || ""}`}>
      {images.map((image, index) => (
        <div key={index} className={`image-wrapper image${index + 1}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
            alt={image}
            width={400}
            height={300}
            priority={index === 0}
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

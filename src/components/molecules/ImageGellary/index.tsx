// ImageGallery.tsx
import React from "react";
import Image from "next/image";
import "./index.scss";

interface ImageData {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

interface ImageGalleryProps {
  images: ImageData[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  return (
    <div className={`gallery ${className || ""}`}>
      {images.map((image, index) => (
        <div key={index} className={`image-wrapper image${index + 1}`}>
          <Image
            src={image.src}
            alt={image.alt || image.src}
            width={image.width || 400}
            height={image.height || 300}
            priority={image.priority || index === 0}
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

"use client";

import React, { useState } from "react";
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
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  spacing?: "small" | "medium" | "large";
  aspectRatio?: "square" | "landscape" | "portrait" | "auto";
  showLightbox?: boolean;
  className?: string;
}

const CollectionImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  spacing = "medium",
  aspectRatio = "auto",
  showLightbox = true,
  className = "",
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    if (showLightbox) {
      setSelectedImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setLightboxOpen(false);
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="empty-state">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`
          collection-gallery
          spacing-${spacing}
          aspect-${aspectRatio}
          cols-mobile-${columns.mobile}
          cols-tablet-${columns.tablet}
          cols-desktop-${columns.desktop}
          ${className}
        `}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt || ""}
              width={image.width || 500}
              height={image.height || 500}
              className="image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {showLightbox && (
              <div className="overlay">
                <div className="overlay-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="lightbox-content">
            <button
              className="close-button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              className={`nav-button prev-button`}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="lightbox-image-container">
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt || ""}
                width={images[selectedImageIndex].width || 1200}
                height={images[selectedImageIndex].height || 800}
                className="lightbox-image"
                priority
              />
            </div>

            <button
              className={`nav-button next-button`}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="image-counter">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionImageGallery;

import React from "react";
import { Typography } from "@/components/atoms/Typography";
import "./index.scss";

interface IHeroTextImageProps {
  imageUrl: string;
  altText?: string;
  topic: string;
  description?: string | React.ReactNode;
}

export const HeroTextImage = ({
  imageUrl,
  altText,
  topic,
  description,
}: IHeroTextImageProps) => {
  return (
    <div className="hero-text-img-wrapper">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="hero-image-wrapper">
        <img src={imageUrl} alt={altText} className="image" />
        <div className="hero-img-overlay" />
      </div>

      <div className="hero-topic-description-wrapper">
        <Typography
          variant="h1"
          label={topic}
          styles={`hero-topic merriweather-semi-bold ${
            topic.length > 20 ? "hero-topic-48" : "hero-topic-64"
          }`}
        />
        {description && (
          <Typography
            variant="p"
            label={description}
            styles="hero-description work-sans-regular"
          />
        )}
      </div>
    </div>
  );
};

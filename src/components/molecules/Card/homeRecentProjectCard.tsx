"use client";

import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useScreenSize } from "@/utils/useScreenSize";
import "./recentProjectCard.scss";

interface IHomeRecentProjectCardProps {
  Key: number;
  projectName: string;
  projectDescription: string;
  projectImage: string;
  className?: string;
  id: string;
  location: string;
  urlPrefix: string;
}

export const HomeRecentProjectCard = ({
  Key,
  projectName,
  projectDescription,
  projectImage,
  className = "",
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  id,
  location,
  urlPrefix,
}: IHomeRecentProjectCardProps) => {
  const screenSize = useScreenSize();
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/project/${urlPrefix}`);
  };

  return screenSize.width > 700 ? (
    <div
      key={Key}
      className={`recent-project-card-wrapper ${className}`}
      data-aos="zoom-in"
      onClick={handleCardClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div key={`project-${Key}`} className="image-container">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${projectImage}`}
          alt={`${projectName}-img`}
          width={500}
          height={500}
          className="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="overlay">
          <div className="text">
            <Typography
              variant="h6"
              label={projectName}
              styles="project-name poppins-semi-bold"
            />
            <Typography
              variant="p"
              label={location}
              styles="project-description poppins-regular"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={Key}
      className={`recent-project-card-wrapper ${className} mobile`}
      data-aos="zoom-in"
      style={{
        background: `
          linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 20%,
  rgba(255, 255, 255, 0.5) 95%
  ),
          url(${process.env.NEXT_PUBLIC_API_URL}/${projectImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "block",
      }}
      data-tooltip-id="project-tooltip"
      onClick={handleCardClick}
    >
      <Typography
        variant="h6"
        label={projectName}
        styles="project-name merriweather-semi-bold"
      />
      <Typography
        variant="p"
        label={projectDescription}
        styles="project-description poppins-regular"
      />
    </div>
  );
};

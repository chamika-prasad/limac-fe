"use client";

import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import readMoreSvg from "@/assets/images/read_more.png";
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
}

export const HomeRecentProjectCard = ({
  Key,
  projectName,
  projectDescription,
  projectImage,
  className = "",
  id,
}: IHomeRecentProjectCardProps) => {
  const screenSize = useScreenSize();
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/project/${id}`);
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
          src={projectImage}
          alt={`${projectName}-img`}
          width={500}
          height={500}
          className="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <Typography
        variant="h6"
        label={projectName}
        styles="project-name poppins-semi-bold"
      />
      <Typography
        variant="p"
        label={projectDescription}
        styles="project-description poppins-regular"
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        label={
          <div className="read-more-wrapper">
            <Typography
              variant="p"
              label="Read More"
              styles="read-more-text poppins-regular"
            />
            <Image src={readMoreSvg} alt="read-more" className="read-more" />
          </div>
        }
        className="read-more-button"
      />
    </div>
  ) : (
    <div
      key={Key}
      className={`recent-project-card-wrapper ${className}`}
      data-aos="zoom-in"
      style={{
        background: `
          linear-gradient(
    to right,
    rgba(255, 255, 255, 0.7) 20%,
  rgba(255, 255, 255, 0.9) 95%
  ),
          url(${projectImage})
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
        styles="project-name poppins-semi-bold"
      />
      <Typography
        variant="p"
        label={projectDescription}
        styles="project-description poppins-regular"
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        label={
          <div className="read-more-wrapper">
            <Typography
              variant="p"
              label="Read More"
              styles="read-more-text poppins-regular"
            />
            <Image src={readMoreSvg} alt="read-more" className="read-more" />
          </div>
        }
        className="read-more-button"
      />
    </div>
  );
};

"use client";

import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import readMoreSvg from "@/assets/images/read_more.png";
import Image from "next/image";
import { useScreenSize } from "@/utils/useScreenSize";

import "./recentProjectCard.scss";

interface IHomeRecentProjectCardProps {
  Key: number;
  projectName: string;
  projectDescription: string;
  // projectDescription2: string;
  projectImage: string;
  className?: string;
  // handleMouseEnter: (e: React.MouseEvent, text: string) => void;
  // handleMouseLeave: (e: React.MouseEvent) => void;
}

export const HomeRecentProjectCard = ({
  Key,
  projectName,
  projectDescription,
  projectImage,
  className = "",
  // projectDescription2,
  // handleMouseEnter,
  // handleMouseLeave,
}: IHomeRecentProjectCardProps) => {
  const screenSize = useScreenSize();
  return screenSize.width > 700 ? (
    <div
      key={Key}
      className={`recent-project-card-wrapper ${className}`}
      data-aos="zoom-in"
      // onMouseEnter={(e) => {
      //   handleMouseEnter(e, projectDescription2);
      // }}
      // onMouseLeave={handleMouseLeave}
      // data-tooltip-id="project-tooltip"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={projectImage}
        alt={`${projectName}-img`}
        className="project-image"
      />

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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import readMoreSvg from "@/assets/images/read_more.png";
import Image from "next/image";
import "./recentProjectCard.scss";

interface IHomeRecentProjectCardProps {
  Key: number;
  projectName: string;
  projectDescription: string;
  projectImage: string;
  className?: string;
}

export const HomeRecentProjectCard = ({
  Key,
  projectName,
  projectDescription,
  projectImage,
  className = "",
}: IHomeRecentProjectCardProps) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      key={Key}
      className={`recent-project-card-wrapper ${className} ${
        isVisible ? "visible" : ""
      }`}
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
  );
};

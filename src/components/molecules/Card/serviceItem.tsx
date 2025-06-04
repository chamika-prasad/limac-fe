"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import "./serviceItem.scss";

interface IServiceItemProps {
  items: string[];
  title: string;
  logoUrl: string;
  className?: string;
  imageUrl?: string;
  screenWidth: number;
  animationSide: "left" | "right";
}

export const ServiceItem = ({
  screenWidth,
  items,
  title,
  logoUrl,
  className,
  imageUrl,
  animationSide,
}: IServiceItemProps) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Set isClient to true once component mounts (client-side only)
    setWidth(screenWidth);
  }, [screenWidth]);

  return imageUrl && width <= 1050 ? (
    <div
      className={`service-item-wrapper ${className ? className : ""}`}
      style={{
        background: `
          linear-gradient(rgba(11, 26, 55, 0.7), rgba(11, 26, 55, 0.7)),
          url(${imageUrl})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "block",
      }}
      data-aos={`fade-${animationSide}`}
    >
      <div className="logo-topic-wrapper">
        {/* <div className="logo-container"> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="" />
        {/* </div> */}
        <Typography
          variant="h4"
          label={title}
          styles="service-item-title poppins-semi-bold"
        />
      </div>

      <div className="list-wrapper">
        <ul className="service-list">
          {items.map((item, i) => (
            <div key={i} className="item">
              <div className="indecator"></div>
              <Typography
                variant="p"
                label={item}
                styles="item-name poppins-light"
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div
      className={`service-item-wrapper ${className ? className : ""}`}
      data-aos={`fade-${animationSide}`}
    >
      <div className="logo-topic-wrapper">
        {/* <div className="logo-container"> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="" />
        {/* </div> */}
        <Typography
          variant="h4"
          label={title}
          styles="service-item-title poppins-semi-bold"
        />
      </div>

      <div className="list-wrapper">
        <ul className="service-list">
          {items.map((item, i) => (
            <div key={i} className="item">
              <div className="indecator"></div>
              <Typography
                variant="p"
                label={item}
                styles="item-name poppins-light"
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

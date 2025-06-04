import React from "react";
import { Typography } from "@/components/atoms/Typography";
import "./serviceItem.scss";

interface IServiceItemProps {
  items: string[];
  title: string;
  logoUrl: string;
  className?: string;
  imageUrl?: string;
  screenWidth: number;
}

export const ServiceItem = ({
  screenWidth,
  items,
  title,
  logoUrl,
  className,
  imageUrl,
}: IServiceItemProps) => {
  return imageUrl && screenWidth <= 1050 ? (
    <div
      className={`service-item-wrapper ${className ? className : ""}`}
      style={{
        background: `
          linear-gradient(rgba(11, 26, 55, 0.9), rgba(11, 26, 55, 0.9)),
          url(${imageUrl})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "block",
      }}
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
    <div className={`service-item-wrapper ${className ? className : ""}`}>
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

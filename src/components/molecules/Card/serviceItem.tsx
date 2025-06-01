import React from "react";
import { Typography } from "@/components/atoms/Typography";
import "./serviceItem.scss";

interface IServiceItemProps {
  items: string[];
  title: string;
  logoUrl: string;
  className?: string;
}

export const ServiceItem = ({
  items,
  title,
  logoUrl,
  className,
}: IServiceItemProps) => {
  return (
    <div className={`service-item-wrapper ${className ? className : ""}`}>
      <div className="logo-topic-wrapper">
        <div className="logo-container">
         {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl} alt="" />
        </div>
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

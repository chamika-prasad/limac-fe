import { Typography } from "@/components/atoms/Typography";
import "./serviceCard.scss";
import React from "react";

interface IServiceCardProps {
  title: string;
  items: string[];
  serviceCardKey: number;
}

export const ServiceCard = ({
  title,
  items,
  serviceCardKey,
}: IServiceCardProps) => {
  return (
    <div key={serviceCardKey} className="service-card">
      <div className="title-icon-wrapper">
        {/* <div className="icon-wrapper">
          <img
            src="assets/images/building_icon.png"
            alt={`service-${title}`}
            className="client-logo"
          />
        </div> */}
        <Typography
          variant="h3"
          label={title}
          styles="card-title poppins-semi-bold"
        />
      </div>

      <ul className="list">
        {items.map((item, i) => (
          <li key={i} className="list-item">
            <Typography
              variant="p"
              label={item}
              styles="item-text poppins-light"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

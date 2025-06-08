import { Typography } from "@/components/atoms/Typography";
import ServiceIcon from "../ServiceIcon";
import "./serviceCard.scss";
import React from "react";

interface IServiceCardProps {
  title: string;
  items: string[];
  serviceCardKey: number;
  icon: string;
}

export const ServiceCard = ({
  title,
  items,
  serviceCardKey,
  icon
}: IServiceCardProps) => {
  return (
    <div key={serviceCardKey} className="service-card">
      <div className="title-icon-wrapper">
        <div className="icon-wrapper">
          <ServiceIcon iconSrc={icon} title={title} />
        </div>

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

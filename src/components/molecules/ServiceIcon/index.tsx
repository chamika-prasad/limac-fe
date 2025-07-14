import React from "react";
import "./index.scss";

interface ServiceIconProps {
  iconSrc: string;
  title: string;
}

const ServiceIcon = ({ iconSrc, title }: ServiceIconProps) => {
  return (
    <div className="service-icon">
      <img src={`${process.env.NEXT_PUBLIC_API_URL}/${iconSrc}`} alt={`service-${title}`} className="client-logo" />
    </div>
  );
};

export default ServiceIcon;

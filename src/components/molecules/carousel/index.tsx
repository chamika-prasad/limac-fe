import React from "react";
import { TrustedClientCard } from "../Card/trastedClientCard";
import { Service } from "@/types";
import Marquee from "react-fast-marquee";
import "./index.scss";

type PropType = {
  slides: Service[];
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides } = props;

  return slides.length < 7 ? (
    <div className="slides-wrapper">
      {slides.map((service, index) => (
        <TrustedClientCard
          Key={index}
          clientName={service.serviceName}
          // clientImage={client.logo}
        />
      ))}
    </div>
  ) : (
    <Marquee>
      {slides.map((service, index) => (
        <TrustedClientCard
          Key={index}
          clientName={service.serviceName}
          // clientImage={client.logo}
          className="slide"
        />
      ))}
    </Marquee>
  );
};

export default Carousel;

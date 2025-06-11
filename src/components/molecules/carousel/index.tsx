import React from "react";
import { TrustedClientCard } from "../Card/trastedClientCard";
import { Client } from "@/types";
import Marquee from "react-fast-marquee";
import "./index.scss";

type PropType = {
  slides: Client[];
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides } = props;

  return slides.length < 7 ? (
    <div className="slides-wrapper">
      {slides.map((client, index) => (
        <TrustedClientCard
          Key={index}
          clientName={client.name}
          // clientImage={client.logo}
        />
      ))}
    </div>
  ) : (
    <Marquee>
      {slides.map((client, index) => (
        <TrustedClientCard
          Key={index}
          clientName={client.name}
          // clientImage={client.logo}
          className="slide"
        />
      ))}
    </Marquee>
  );
};

export default Carousel;

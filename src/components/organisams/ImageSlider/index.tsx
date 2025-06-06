"use client";

import React, { useEffect, useRef } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import nextIcon from "@/assets/images/next.png";
import prevIcon from "@/assets/images/prev.png";
import Image from "next/image";
import "./index.scss";

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const timeRunningRef = useRef<HTMLDivElement>(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const runTimeOutRef = useRef<NodeJS.Timeout | null>(null);
  const runNextAutoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set up initial auto-slide
    runNextAutoRef.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    // Clean up timeouts on unmount
    return () => {
      if (runTimeOutRef.current) clearTimeout(runTimeOutRef.current);
      if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);
    };
  }, []);

  const resetTimeAnimation = () => {
    if (timeRunningRef.current) {
      timeRunningRef.current.style.animation = "none";
      // Trigger reflow
      void timeRunningRef.current.offsetHeight;
      timeRunningRef.current.style.animation = "";
      timeRunningRef.current.style.animation =
        "runningTime 7s linear 1 forwards";
    }
  };

  const showSlider = (type: string) => {
    const sliderItemsDom = listRef.current?.querySelectorAll(".item");

    if (!sliderItemsDom || sliderItemsDom.length === 0) return;

    if (type === "next") {
      listRef.current?.appendChild(sliderItemsDom[0]);
      carouselRef.current?.classList.add("next");
    } else {
      listRef.current?.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current?.classList.add("prev");
    }

    if (runTimeOutRef.current) clearTimeout(runTimeOutRef.current);

    runTimeOutRef.current = setTimeout(() => {
      carouselRef.current?.classList.remove("next");
      carouselRef.current?.classList.remove("prev");
    }, timeRunning);

    if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);

    runNextAutoRef.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();
  };

  const handleNext = () => {
    showSlider("next");
  };

  const handlePrev = () => {
    showSlider("prev");
  };

  const items = [
    {
      image: "/assets/images/home_bg_04.jpg",
      title: "Join Us",
      description:
        "“Whether you’re planning your next luxury development or seeking a trusted construction partner, we’re here to bring your vision to life. Reach out to us”",
    },
    {
      image: "/assets/images/home_bg_01.jpg",
      title: "Welcome",
      description:
        "“From Iconic Residences To Landmark Commercial Spaces, We Deliver Elegance Through Engineering.”",
    },
    {
      image: "/assets/images/home_bg_02.png",
      title: "Vision",
      description:
        "“To lead Sri Lanka's construction industry through innovation, affordability, and sustainable development.”",
    },
    {
      image: "/assets/images/home_bg_03.jpg",
      title: "Mission",
      description:
        "“To deliver quality, cost-effective, and responsible building solutions while empowering communities and exceeding client expectations.”",
    },
  ];

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
            id={`item-${index}`}
          >
            <div className="content">
              <Typography
                variant={ item.title === "Welcome" ?"p":"h1"}
                label={item.title}
                styles={`title merriweather-semi-bold ${
                  item.title === "Welcome" ? "welcome-title" : "defaul-title"
                }`}
              />
              <Typography
                variant={ item.title === "Welcome" ?"h1":"p"}
                label="LIMAC DEVELOPMENT (PVT) LTD"
                styles={`name merriweather-regular ${
                  item.title === "Welcome" ? "welcome-name" : "default-name"}`}
              />
              <Typography
                variant="p"
                label={item.description}
                styles="des poppins-extra-bold"
              />
              <div className="btn">
                <Button
                  label="See Our Work"
                  onClick={() => {
                    console.log("");
                  }}
                  className="cta-button"
                />
              </div>
            </div>
            <div className="overlay" />
          </div>
        ))}
      </div>

      <div className="arrows">
        <Button
          label={<Image src={prevIcon} alt="prev" />}
          onClick={handlePrev}
        />
        <Button
          label={<Image src={nextIcon} alt="next" />}
          onClick={handleNext}
        />
      </div>

      <div className="timeRunning" ref={timeRunningRef}></div>
    </div>
  );
};

export default ImageSlider;

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { ImageGellary } from "@/components/molecules/ImageGellary";
import "./page.scss";

export default function Project() {
  const images = [
    "assets/images/rectangle_01.png",
    "assets/images/rectangle_02.png",
    "assets/images/rectangle_03.png",
    "assets/images/rectangle_04.png",
    "assets/images/rectangle_05.png",
  ];

  const images02 = [
    "assets/images/rectangle_06.png",
    "assets/images/rectangle_07.png",
    "assets/images/rectangle_08.png",
    "assets/images/rectangle_09.png",
    "assets/images/rectangle_10.png",
    "assets/images/rectangle_11.png",
    "assets/images/rectangle_12.png",
    "assets/images/rectangle_13.png",
  ];
  return (
    <main className="project-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/service.png"
        topic="Proposed housing project colombo"
      />

      <div className="content-section">
        <div className="top-content">
          <div className="left-content">
            <Typography
              variant="h3"
              label="Overview"
              styles="project-topic poppins-regular"
            />
            <Typography
              variant="p"
              label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              styles="project-overview-description poppins-regular"
            />

            <div className="image-gellary">
              <ImageGellary images={images} />
            </div>
          </div>
          <div className="right-content">
            <Typography
              variant="h3"
              label="Project Highlights"
              styles="project-topic poppins-regular"
            />

            <div className="highlight-wrapper">
              {[...Array(7)].map((_, index) => (
                <div className="highlight" key={index}>
                  <div className="list-item"></div>
                  <Typography
                    variant="p"
                    label="Lorem Ipsum is simply"
                    styles="poppins-medium"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Typography
          variant="p"
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          styles="project-overview-description poppins-regular"
        />
        <div className="image-gellary">
          <ImageGellary images={images02} />
        </div>
      </div>
    </main>
  );
}

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { ImageGellary } from "@/components/molecules/ImageGellary";
import mapIcon from "@/assets/images/map.png";
import callIcon from "@/assets/images/phone_solid.png";
import emailIcon from "@/assets/images/email.png";
import Image from "next/image";
import "./page.scss";

export default function About() {
  const images = [
    "assets/images/rectangle_14.png",
    "assets/images/rectangle_17.png",
    "assets/images/rectangle_15.png",
    "assets/images/rectangle_16.png",
  ];

  return (
    <main className="about-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/about.png"
        topic="About us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <div className="content-section">
        <div className="top-content">
          <div className="left-content">
            <Typography
              variant="p"
              label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              styles="project-overview-description poppins-regular"
            />

            <Typography
              variant="p"
              label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              styles="project-overview-description poppins-regular"
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
              variant="p"
              label="What Makes Us Unique?"
              styles="about-topic poppins-regular"
            />

            <div className="highlight-wrapper">
              {[...Array(7)].map((_, index) => (
                <div className="highlight" key={index}>
                  <div className="list-item"></div>
                  <Typography
                    variant="p"
                    label="Lorem Ipsum is simply"
                    styles="list-item-text poppins-medium"
                  />
                </div>
              ))}
            </div>

            <Typography
              variant="p"
              label="What Choose Us?"
              styles="about-topic poppins-regular"
            />

            <div className="highlight-wrapper">
              {[...Array(7)].map((_, index) => (
                <div className="highlight" key={index}>
                  <div className="list-item"></div>
                  <Typography
                    variant="p"
                    label="Lorem Ipsum is simply"
                    styles="list-item-text poppins-medium"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Typography
          variant="p"
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          styles="project-overview-description poppins-regular"
        />
        <div className="contact">
          <div className="contact-detail">
            <Image src={mapIcon} alt="instagram" priority className="" />
            <Typography
              variant="p"
              label=": No:162, Main Road, Galle"
              styles="contact-detail-text poppins-regular"
            />
          </div>
          <div className="contact-detail">
            <Image src={callIcon} alt="instagram" priority className="" />
            <Typography
              variant="p"
              label=": +94 12 356 8526"
              styles="contact-detail-text poppins-regular"
            />
          </div>
          <div className="contact-detail">
            <Image src={emailIcon} alt="instagram" priority className="" />
            <Typography
              variant="p"
              label=": test139238@gmail.com"
              styles="contact-detail-text poppins-regular"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

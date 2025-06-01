import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { ServiceItem } from "@/components/molecules/Card/serviceItem";
import serviceImg from "@/assets/images/service.png";
import "./page.scss";
import Image from "next/image";

export default function Service() {
  return (
    <main className="service-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/service.png"
        topic="Our Services"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Typography
        variant="p"
        label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        styles="service-description poppins-regular"
      />

      <section className="services-list">
        <div className="service-item">
          <ServiceItem
            items={[
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
            ]}
            title="Building Constructions"
            logoUrl="assets/images/building_icon.png"
            className="service-text-content"
          />
          <Image
            src={serviceImg}
            alt="Construction site"
            // quality={100}
            className="service-image-content"
          />
        </div>
        <div className="service-item">
          <Image
            src={serviceImg}
            alt="Construction site"
            // quality={100}
            className="service-image-content"
          />
          <ServiceItem
            items={[
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
              "Lorem Ipsum",
              "has been the",
              "industry's standard",
            ]}
            title="Building Constructions"
            logoUrl="assets/images/building_icon.png"
            className="service-text-content"
          />
        </div>
      </section>
    </main>
  );
}

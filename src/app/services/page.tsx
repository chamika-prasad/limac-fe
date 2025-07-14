"use client";

import React, { useEffect, useState } from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { ServiceItem } from "@/components/molecules/Card/serviceItem";
import { Service as ServiceType } from "@/types";
import "./page.scss";
import { useGetAllServicesQuery } from "../api/serviceApi";

export default function Service() {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isClient, setIsClient] = useState(false);
  const {
    data: servicesData,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isLoading: servicesDataIsLoading,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isError: servicesDataIsError,
  } = useGetAllServicesQuery({});

  useEffect(() => {
    // Set isClient to true once component mounts (client-side only)
    setIsClient(true);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="service-page-wrapper">
      <HeroTextImage
        // imageUrl="assets/images/service.jpg"
        imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/uploads/services/service.jpg`}
        topic="Our Services"
        description="We specialize in a wide range of construction and engineering services, from residential and commercial buildings to complex infrastructure projects. With a focus on quality and innovation, we deliver solutions tailored to our clients’ needs."
      />
      <Typography
        variant="p"
        label="Our expertise spans across building construction, civil engineering, project management, design-build solutions, EP Services, Consultancy Services and complete renovation services. Whether you're planning a new build or upgrading an existing structure, we offer end-to-end services to bring your vision to life."
        styles="service-description poppins-regular"
      />

      <section className="services-list">
        {servicesData &&
          servicesData.success &&
          servicesData.data &&
          servicesData.data.length > 0 &&
          servicesData.data.map((service: ServiceType, index: number) => (
            <div className="service-item" key={index} id={`item-${index}`}>
              {index % 2 !== 0 && isClient && screenWidth > 1050 ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${service.image}`}
                  alt={`${service.serviceName} image`}
                  className="service-image-content"
                  data-aos="fade-right"
                />
              ) : null}
              <ServiceItem
                items={service.includes.split(",")}
                title={service.serviceName}
                logoUrl={service.logo}
                className="service-text-content"
                imageUrl={service.image}
                screenWidth={screenWidth}
                animationSide={index % 2 !== 0 ? "left" : "right"}
              />
              {index % 2 === 0 && isClient && screenWidth > 1050 ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${service.image}`}
                  alt={`${service.serviceName} image`}
                  className="service-image-content"
                  data-aos="fade-left"
                />
              ) : null}
            </div>
          ))}
      </section>
    </main>
  );
}

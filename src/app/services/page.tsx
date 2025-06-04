"use client";

import React, { useEffect, useState } from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { ServiceItem } from "@/components/molecules/Card/serviceItem";
import serviceImg from "@/assets/images/service.png";
// import serviceIcon from "@/assets/images/serviceIcon.png";
import "./page.scss";
import Image from "next/image";

export default function Service() {
   {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [isClient, setIsClient] = useState(false);
  const logoUrl = "assets/images/serviceIcon.png";

  const services = [
    {
      title: "Building Construction",
      items: [
        "Residential buildings",
        "Commercial buildings (Hotel and resort, Apartment)",
        "Industrial buildings",
      ],
    },
    {
      title: "Civil Engineering Works",
      items: [
        "Infrastructure development",
        "Road and drainage systems",
        "Structural concrete work",
      ],
    },
    {
      title: "Project Management",
      items: [
        "Planning and scheduling",
        "Cost control and budgeting",
        "Site supervision and quality control",
      ],
    },
    {
      title: "Renovation & Refurbishment",
      items: [
        "House and office renovations",
        "Luxury hotel renovation",
        "Extensions and modifications",
      ],
    },
    {
      title: "Design and Build Solutions",
      items: [
        "Architectural and structural design",
        "Full turnkey project delivery",
      ],
    },
    {
      title: "Electrical & Plumbing (EP) Services",
      items: ["Electrical installations", "Plumbing systems"],
    },
    {
      title: "Consultancy Services",
      items: ["Engineering consultancy", "Quantity surveying"],
    },
  ];

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
        imageUrl="assets/images/service.png"
        topic="Our Services"
        description="We specialize in a wide range of construction and engineering services, from residential and commercial buildings to complex infrastructure projects. With a focus on quality and innovation, we deliver solutions tailored to our clients’ needs."
      />
      <Typography
        variant="p"
        label="Our expertise spans across building construction, civil engineering, project management, design-build solutions, EP Services, Consultancy Services and complete renovation services. Whether you're planning a new build or upgrading an existing structure, we offer end-to-end services to bring your vision to life."
        styles="service-description poppins-regular"
      />

      <section className="services-list">
        {services.map((service, index) => (
            <div className="service-item" key={index}>
            {(index % 2 !== 0 && isClient && screenWidth > 1050) ? (
              <Image
              src={serviceImg}
              alt={`${service.title} image`}
              className="service-image-content"
              />
            ) : null}
            <ServiceItem
              items={service.items}
              title={service.title}
              logoUrl={logoUrl}
              className="service-text-content"
              imageUrl={serviceImg.src}
              screenWidth={screenWidth}
            />
            {(index % 2 === 0 && isClient && screenWidth > 1050) ? (
              <Image
              src={serviceImg}
              alt={`${service.title} image`}
              className="service-image-content"
              />
            ) : null}
            </div>
        ))}
      </section>
    </main>
  );
}

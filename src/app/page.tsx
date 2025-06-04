"use client";

import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import { ServiceCard } from "@/components/molecules/Card/serviceCard";
import { Button } from "@/components/atoms/Button";
import homeImage2 from "@/assets/images/home_02.jpg";
import Image from "next/image";
import ImageSlider from "@/components/organisams/ImageSlider";
import Carousel from "@/components/molecules/carousel";
import { Client } from "@/types";
import ServiceCarousel from "@/components/molecules/ServiceCarousel";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./page.scss";

const clients: Client[] = [
  { name: "SPARK", logo: "assets/images/spark.png" },
  { name: "LOGAZ", logo: "assets/images/logaz.png" },
  { name: "SPONA", logo: "assets/images/spona.png" },
  { name: "OLLA", logo: "assets/images/olla.png" },
  { name: "SPONA", logo: "assets/images/spona.png" },
  { name: "OLLA", logo: "assets/images/olla.png" },
  { name: "LOGAZ", logo: "assets/images/logaz.png" },
  // { name: "LOGAZ", logo: "assets/images/logaz.png" },
];

const services = [
  {
    title: "Design & Build Solution",
    items: [
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
    ],
    logo: "assets/images/design_icon.png",
  },
  {
    title: "Building Constructions",
    items: [
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
    ],
    logo: "assets/images/building_icon.png",
  },
  {
    title: "Project Management",
    items: [
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
      "Lorem Ipsum",
      "has been the",
      "industry's standard",
    ],
    logo: "assets/images/project_icon.png",
  },
];

const projects = [
  {
    title: "Canadian Construction Branches",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
    image: "assets/images/recent_01.png",
  },
  {
    title: "Canadian Construction Branches",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
    image: "assets/images/recent_01.png",
  },
  {
    title: "Australian Construction Branches",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
    image: "assets/images/recent_02.png",
  },
  {
    title: "Brazilian Construction Branches",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
    image: "assets/images/recent_03.png",
  },
];

export default function Home() {
  const handleClick = () => {};
  return (
    <ParallaxProvider>
      <main className="home-wrapper">
        {/* <PageLoader/> */}
        <ImageSlider />

        <section className="clients">
          <div className="clients-container">
            <Typography
              variant="h2"
              label="OUR TRUSTED CLIENTS"
              styles="clients-title inter-bold"
            />

            <div className="clients-logos">
              <Carousel slides={clients} />
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <Typography
              variant="h2"
              label="Our Services"
              styles="title title-common poppins-semi-bold"
            />

            <Typography
              variant="p"
              label="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              styles="description poppins-regular"
            />

            <ServiceCarousel>
              {services.map((service, index) => (
                <ServiceCard
                  title={service.title}
                  items={service.items}
                  key={index}
                  logo={service.logo}
                />
              ))}
            </ServiceCarousel>
          </div>
        </section>
        <section className="build-section ">
          {/* Content */}
          <div className="content">
            <Typography
              variant="h2"
              label="Let us help you build."
              styles="title title-common poppins-semi-bold"
            />
            <Typography
              variant="p"
              label="Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
              styles="description poppins-regular"
            />
          </div>

          {/* Background Image */}
          <div className="background-image">
            <Parallax speed={-15}>
              <Image
                src={homeImage2}
                alt="Construction site"
                quality={100}
                className="image"
                priority
              />
            </Parallax>
            <div className="overlay" />
          </div>
        </section>
        <section className="projects">
          <div className="container">
            <Typography
              variant="h2"
              label="Recent Projects"
              styles="title title-common poppins-semi-bold"
            />

            <Typography
              variant="p"
              label="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              styles="description poppins-regular"
            />

            <div className="grid">
              {projects.map((project, index) => (
                <div className="project-holder" key={index}>
                  <HomeRecentProjectCard
                    Key={index}
                    projectName={project.title}
                    projectDescription={project.description}
                    projectImage={project.image}
                    className="project-card"
                  />
                </div>
              ))}
            </div>

            <div className="cta">
              <Button
                label="Contact Us"
                className="contact-button"
                onClick={handleClick}
              />
            </div>
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
}

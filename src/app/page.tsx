"use client";

import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import { ServiceCard } from "@/components/molecules/Card/serviceCard";
import { Button } from "@/components/atoms/Button";
import buildSolutionImg from "@/assets/images/build_solutions.jpg";
import Image from "next/image";
import Carousel from "@/components/molecules/carousel";
import ServiceCarousel from "@/components/molecules/ServiceCarousel";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import classNames from "classnames";
import { useScreenSize } from "@/utils/useScreenSize";
import { useRouter } from "next/navigation";
import FadingCarousel from "@/components/organisams/OpacityImageSlider";
import { useGetAllProjectsQuery } from "./api/projectApi";
import { useGetAllServicesQuery } from "./api/serviceApi";
import { Project, Service } from "@/types";
import "./page.scss";

export default function Home() {
  const router = useRouter();
  const screenSize = useScreenSize();

  const {
    data: fetchedProjectsData,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isLoading: projectsDataIsLoading,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isError: projectsDataIsError,
  } = useGetAllProjectsQuery({});

  const {
    data: servicesData,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isLoading: servicesDataIsLoading,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isError: servicesDataIsError,
  } = useGetAllServicesQuery({});

  const handleClick = () => {
    router.push(`/contact`);
  };

  return (
    <ParallaxProvider>
      <main className="home-wrapper">
        {/* <NewImageSlider autoPlayInterval={4000} animationDuration={1.2} /> */}
        <FadingCarousel />

        <section className="clients">
          <div className="clients-container">
            <Typography
              variant="h2"
              // label="OUR TRUSTED CLIENTS"
              label="WE ARE EXPERT IN"
              styles="clients-title inter-bold"
            />

            {servicesData &&
            servicesData.success &&
            servicesData.data &&
            servicesData.data.length > 0 ? (
              <div className="clients-logos">
                <Carousel slides={servicesData.data} />
              </div>
            ) : null}
          </div>
        </section>
        <section className="services">
          <div className="container">
            <Typography
              variant="h2"
              label="Our Services"
              styles="title title-common merriweather-semi-bold"
            />

            <Typography
              variant="p"
              label="Transform your vision into reality with our comprehensive construction services. From initial concept to final completion, we deliver innovative solutions tailored to your unique needs. Our experienced team combines cutting-edge design principles with proven construction expertise to ensure your project exceeds expectations while staying on time and within budget"
              styles="description poppins-regular"
            />

            {servicesData &&
            servicesData.success &&
            servicesData.data &&
            servicesData.data.length > 0 ? (
              <ServiceCarousel>
                {servicesData.data.map((service: Service, index: number) => (
                  <ServiceCard
                    title={service.serviceName}
                    items={service.includes.split(",")}
                    serviceCardKey={index}
                    icon={service.logo}
                    key={index}
                  />
                ))}
              </ServiceCarousel>
            ) : null}
          </div>
        </section>
        <section className="build-section ">
          {/* Content */}
          <div className="build-section-content">
            <Typography
              variant="h2"
              label="Let us help you build."
              styles="title title-common poppins-semi-bold"
            />
            <Typography
              variant="p"
              label="Whether it's residential, commercial, or industrial, we bring your vision to life with expert craftsmanship and unwavering commitment."
              styles="description poppins-regular"
            />
          </div>

          {/* Background Image */}
          <div className="background-image">
            <Parallax speed={-15}>
              <Image
                src={buildSolutionImg}
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
              styles="title title-common merriweather-semi-bold"
            />

            <Typography
              variant="p"
              label="Discover some of our latest construction and renovation projects that reflect our commitment to quality, innovation, and client satisfaction."
              styles="description poppins-regular"
            />

            <div
              className={classNames(
                "recent-projects",
                (fetchedProjectsData &&
                  fetchedProjectsData.success &&
                  fetchedProjectsData.data.length <= 2 &&
                  screenSize.width > 700) ||
                  screenSize.width <= 700
                  ? "justify-center"
                  : "justify-space-between"
              )}
            >
              {fetchedProjectsData &&
                fetchedProjectsData.success &&
                fetchedProjectsData.data.length > 0 &&
                fetchedProjectsData.data.map(
                  (project: Project, index: number) => (
                    <HomeRecentProjectCard
                      Key={index}
                      projectName={project.projectName}
                      projectDescription={project.topDescription}
                      projectImage={project.topImages.split(",")[0]}
                      id={project.id}
                      className="project-card"
                      location={project.location}
                    />
                  )
                )}
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

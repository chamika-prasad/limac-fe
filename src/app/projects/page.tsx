"use client";

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import { useScreenSize } from "@/utils/useScreenSize";
import classNames from "classnames";
import "./page.scss";
// import { Tooltip } from "react-tooltip";

interface InfoObject {
  name: string;
  highlights: string[];
  des1: string;
  des2: string;
}

export default function Projects() {
  const screenSize = useScreenSize();

  // const [hoveredText, setHoveredText] = useState("");

  // const handleMouseEnter = (e: React.MouseEvent, text: string) => {
  //   e.preventDefault();
  //   setHoveredText(text);
  // };

  // const handleMouseLeave = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setHoveredText("");
  // };

  const projects: InfoObject[] = [
    {
      name: "Marine suite service apartment",
      highlights: [
        "Construction management",
        "Project Management",
        "Extension and modification",
        "Luxury Hotel renovation",
        "Engineering consultancy",
        "Quantity Surveying",
        "Supervision & Quality Control",
      ],
      des1: "The Marine Suite Service Apartment in Kollupitiya Completed major renovation to elevate its standards of comfort and style.",
      des2: "The project showcases the creative expertise of Team Work Association as the architect, with construction works managed by Limac Development (Pvt) Ltd. Through this transformation, Marine Suite is set to blend contemporary living with the charm of its prime coastal location, offering a refreshed and luxurious experience for future guests.",
    },
    {
      name: "Renovation to the Existing House and office building – Akuregoda",
      highlights: [
        "Structural concrete work",
        "Planning and Scheduling work",
        "Site Supervision and quality control",
        "House and Office renovation",
        "Electrical installation",
        "Plumbing installation",
      ],
      des1: "The proposed housing project and office building located in Akuregoda, is a successfully completed.",
      des2: "development collaboratively undertaken by Thisara Thanapathi Associates and constructed by Limac Development (Pvt) Ltd. The project showcases a harmonious integration of modern residential and office spaces, designed to meet both aesthetic and functional demands. With architectural excellence by Thisara Thanapathi Associates and high-quality construction by Limac Development, the project stands as a testament to thoughtful planning, durable execution, and contemporary design.",
    },
  ];
  return (
    <main className="projects-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/service.png"
        topic="Projects"
        description="Delivering integrated construction and engineering solutions with precision, innovation, and full project ownership—ensuring quality, efficiency, and lasting value from design through to completion."
      />
      <Typography
        variant="p"
        label="Over the years, we have completed a wide range of projects across various sectors, including residential, commercial, and infrastructure developments. Our team’s expertise and attention to detail ensure that every project is executed to the highest standards, delivering long-lasting value to our clients."
        styles="projects-description poppins-regular"
      />

      <section
        className={classNames(
          "projects-list",
          (projects.length === 2 && screenSize.width > 700) ||
            screenSize.width <= 700
            ? "justify-start"
            : "justify-space-between"
        )}
      >
        {projects.map((project, index) => (
          <HomeRecentProjectCard
            Key={index}
            projectName={project.name}
            projectDescription={project.des1}
            projectImage="assets/images/recent_01.png"
            // projectDescription2={project.des2}
            // handleMouseEnter={handleMouseEnter}
            // handleMouseLeave={handleMouseLeave}
          />
        ))}
      </section>
      {/* <Tooltip id="project-tooltip">
        <div className="project-tooltip-wrapper">
          <Typography
            variant="p"
            label={hoveredText}
            styles="read-more-text poppins-regular"
          />
        </div>
      </Tooltip> */}
    </main>
  );
}

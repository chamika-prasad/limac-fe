"use client";

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import { useScreenSize } from "@/utils/useScreenSize";
import classNames from "classnames";
import { projects } from "@/data/projectData";
import "./page.scss";


export default function Projects() {
  const screenSize = useScreenSize();

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
            projectImage={project.images[0].src}
            id={project.id}
          />
        ))}
      </section>
    </main>
  );
}

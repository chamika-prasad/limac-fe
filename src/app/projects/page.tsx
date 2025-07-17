"use client";

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import { useScreenSize } from "@/utils/useScreenSize";
import classNames from "classnames";
import { useGetAllProjectsQuery } from "../api/projectApi";
import { Project } from "@/types";
import "./page.scss";

export default function Projects() {
  const screenSize = useScreenSize();

  const {
    data: fetchedProjectsData,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isLoading: projectsDataIsLoading,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    isError: projectsDataIsError,
  } = useGetAllProjectsQuery({});

  return (
    <main className="projects-page-wrapper">
      <HeroTextImage
        // imageUrl="assets/images/our_service.jpg"
        imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/projects.jpg`}
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
          (fetchedProjectsData &&
            fetchedProjectsData.success &&
            fetchedProjectsData.data.length === 2 &&
            screenSize.width > 700) ||
            screenSize.width <= 700
            ? "justify-start"
            : "justify-space-between"
        )}
      >
        {fetchedProjectsData &&
          fetchedProjectsData.success &&
          fetchedProjectsData.data.length > 0 &&
          fetchedProjectsData.data.map((project: Project, index: number) => (
            <HomeRecentProjectCard
              Key={index}
              projectName={project.projectName}
              projectDescription={project.topDescription}
              projectImage={project.topImages.split(",")[0]}
              id={project.id}
              location={project.location}
              urlPrefix={project.urlPrefix}
            />
          ))}
      </section>
    </main>
  );
}

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import ImageGallery from "@/components/molecules/ImageGellary";
import CollectionImageGallery from "@/components/molecules/CollectionImageGellary";
import "./page.scss";
import { projects } from "@/data/projectData";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  return (
    <main className="project-page-wrapper">
      <HeroTextImage
        imageUrl="/assets/images/service.png"
        topic={project?.name ? project?.name : ""}
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
              label={project?.des1}
              styles="project-overview-description poppins-regular"
            />

            {/* <div className="image-gellary">
              <ImageGellary images={images} />
            </div> */}
            {project?.images && (
              <div className="image-gellary">
                <ImageGallery images={project.images.slice(0, 5)} />
              </div>
            )}
          </div>
          <div className="right-content">
            <Typography
              variant="h3"
              label="Project Highlights"
              styles="project-topic poppins-regular"
            />

            <div className="highlight-wrapper">
              {project?.highlights.map((item, index) => (
                <div className="highlight" key={index}>
                  <div className="list-item"></div>
                  <Typography
                    variant="p"
                    label={item}
                    styles="poppins-medium"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Typography
          variant="p"
          label={project?.des2}
          styles="project-overview-description des-2 poppins-regular"
        />
        {project?.images && project.images.length > 5 && (
          <div className="gellary-2">
            {/* <ImageGellary images={project.images.slice(5)} /> */}
            <CollectionImageGallery
              images={project.images.slice(5)}
              columns={{ mobile: 1, tablet: 3, desktop: 4 }}
              aspectRatio="landscape"
            />
          </div>
        )}
      </div>
    </main>
  );
}

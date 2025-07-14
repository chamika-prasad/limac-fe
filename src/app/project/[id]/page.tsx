"use client";

import React, { use } from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import ImageGallery from "@/components/molecules/ImageGellary";
import CollectionImageGallery from "@/components/molecules/CollectionImageGellary";
import { useGetProjectByIdQuery } from "@/app/api/projectApi";
import "./page.scss";

type Params = Promise<{ id: string }>

export default function Project(props: { params: Params }) {
  const params = use(props.params)
  const  id  = params.id;
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { data: projectData, isLoading, isError } = useGetProjectByIdQuery(id);

  return (
    <main className="project-page-wrapper">
      {projectData && projectData.success && projectData.data ? (
        <HeroTextImage
          imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/${projectData.data.topImages.split(",")[0]}`}
          topic={projectData.data ? projectData.data.projectName : ""}
        />
      ) : null}

      {projectData && projectData.success && projectData.data ? (
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
                label={projectData.data.topDescription}
                styles="project-overview-description poppins-regular"
              />

              {/* <div className="image-gellary">
              <ImageGellary images={images} />
            </div> */}
              {projectData && projectData.success && projectData.data && (
                <div className="image-gellary">
                  <ImageGallery
                    images={projectData.data.topImages.split(",")}
                  />
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
                {projectData.data.highlights
                  .split(",")
                  .map((item: string, index: number) => (
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
            label={projectData.data.bottomDescription}
            styles="project-overview-description des-2 poppins-regular"
          />
          {projectData &&
            projectData.success &&
            projectData.data &&
            projectData.data.bottomImages && (
              <div className="gellary-2">
                {/* <ImageGellary images={project.images.slice(5)} /> */}
                <CollectionImageGallery
                  images={projectData.data.bottomImages.split(",")}
                  columns={{ mobile: 1, tablet: 3, desktop: 4 }}
                  aspectRatio="landscape"
                />
              </div>
            )}
        </div>
      ) : null}
    </main>
  );
}

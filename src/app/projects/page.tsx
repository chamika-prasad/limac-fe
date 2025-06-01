import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { HomeRecentProjectCard } from "@/components/molecules/Card/homeRecentProjectCard";
import "./page.scss";

export default function Projects() {
  return (
    <main className="projects-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/service.png"
        topic="Projects"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <Typography
        variant="p"
        label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        styles="projects-description poppins-regular"
      />

      <section className="projects-list">
        {[...Array(7)].map((_, index) => (
          <div className="project-holder" key={`project-holder-${index}`}>
            <HomeRecentProjectCard
              Key={index}
              projectName="Canadian Construction Branches"
              projectDescription="We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!"
              projectImage="assets/images/recent_01.png"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

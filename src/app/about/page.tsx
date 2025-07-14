"use client";

import React from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import mapIcon from "@/assets/images/map.png";
import callIcon from "@/assets/images/phone_solid.png";
import emailIcon from "@/assets/images/email.png";
import Image from "next/image";
import ProgressBar from "@/components/molecules/ProgressBar";
import "./page.scss";

export default function About() {
  const unique = [
    "Design and Build",
    "Project Management",
    "Consultancy Services",
    "Quantity Surveying",
    "Use of Sustainable Materials",
    "Renovations",
    "Residential",
    "Commercial",
    "Industrial Buildings",
    "Plumbing",
    "Electrical",
    "Structural Concrete Work",
    "Steel Structure",
    "Waterproofing",
  ];

  const chooseUs = [
    "Quality",
    "Safety",
    "Sustainability",
    "Precision",
    "Performance",
    "Professionalism",
  ];

  return (
    <main className="about-page-wrapper">
      <HeroTextImage
        imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/uploads/about/about.jpg`}
        topic="About us"
        description={
          <>
            <span className="custom-weight">
              Welcome to Limac Development (Pvt) Ltd. —{" "}
            </span>
            a trusted name in construction and innovation.
          </>
        }
      />

      <div className="content-section">
        <div className="top-content">
          <div className="left-content">
            <Typography
              variant="p"
              label="Founded with a vision to build lasting value,"
              styles="about-description poppins-regular"
            />

            <Typography
              variant="p"
              label={
                <>
                  Limac Development is a leading construction and development
                  firm in Sri Lanka. We specialize in{" "}
                  <span className="custom-weight">
                    design and build, project management, consultancy services,
                    quantity surveying,
                  </span>{" "}
                  and the use of
                  <span className="custom-weight">sustainable materials</span> .
                  Our expertise spans across{" "}
                  <span className="custom-weight">
                    renovations, residential, commercial,
                  </span>
                  and{" "}
                  <span className="custom-weight">industrial buildings</span>,
                  as well as specialized services including{" "}
                  <span className="custom-weight">
                    plumbing, electrical , structural concrete work, Steel
                    Structure,
                  </span>{" "}
                  and <span className="custom-weight">waterproofing</span>.
                </>
              }
              styles="about-description poppins-regular"
            />

            <Typography
              variant="p"
              label={
                <>
                  With a dedicated team of engineers, architects, and project
                  managers, we deliver excellence from concept to completion.
                  Our commitment to{" "}
                  <span className="custom-weight">quality, safety,</span> and{" "}
                  <span className="custom-weight">sustainability </span>, has
                  earned us the trust of clients across the island.
                </>
              }
              styles="about-description poppins-regular"
            />

            <div className="image-gellary">
              <div className="left-images">
                <div className="top-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/about/rectangle_14.jpg`}
                    alt="work image"
                    className=""
                  />
                </div>
                <div className="bottom-images">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/about/rectangle_16.jpg`}
                    alt="work image"
                    className="bottom-image"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    // src="/assets/images/rectangle_17.jpg"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/about/rectangle_17.jpg`}
                    alt="work image"
                    className="bottom-image"
                  />
                </div>
              </div>
              <div className="right-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/about/rectangle_15.jpg`}
                  alt="work image"
                  className=""
                />
              </div>
            </div>

            <Typography
              variant="p"
              label="We Are turning visions into reality through innovative construction solutions and exceptional
              craftsmanship. With over 5 years of experience in the industry, our team has built a reputation
              for delivering projects that stand the test of time—on time and within budget.
              "
              styles="about-description poppins-regular"
            />
          </div>
          <div className="right-content">
            <div className="highlight-container">
              <Typography
                variant="p"
                label="What Makes Us Unique?"
                styles="about-topic poppins-regular"
              />

              <div className="highlight-wrapper">
                {unique.map((item, index) => (
                  <div className="highlight" key={index}>
                    <div className="list-item"></div>
                    <Typography
                      variant="p"
                      label={item}
                      styles="list-item-text poppins-medium"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="highlight-container">
              {" "}
              <Typography
                variant="p"
                label="What Choose Us?"
                styles="about-topic poppins-regular"
              />
              <div className="highlight-wrapper">
                {chooseUs.map((item, index) => (
                  <div className="item-progress-container" key={index}>
                    <div className="item-presentage-wrapper">
                      <div className="highlight">
                        <div className="list-item"></div>
                        <Typography
                          variant="p"
                          label={item}
                          styles="list-item-text poppins-medium"
                        />
                      </div>
                      <Typography
                        variant="p"
                        label="100%"
                        styles="list-item-text poppins-medium"
                      />
                    </div>

                    <ProgressBar delay={index * 100} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-content">
          {" "}
          <Typography
            variant="p"
            label={
              <>
                At Limac Development, every project is a promise — a promise of{" "}
                <span className="custom-weight">precision, performance,</span>{" "}
                and <span className="custom-weight">professionalism. </span>
              </>
            }
            styles="about-description poppins-regular bottom-description"
          />
          <Typography
            variant="p"
            label="Let us help bring your vision to life."
            styles="about-description poppins-regular bottom-description"
          />
          <div className="contact">
            <div className="contact-detail">
              <Image src={mapIcon} alt="instagram" priority className="" />
              <Typography
                variant="p"
                label=": Limac Development Pvt Ltd, No. 754/D , Pannipitiya Road, Battarmulla [Postal Code-10120], Sri Lanka"
                styles="contact-detail-text poppins-regular"
              />
            </div>
            <div className="contact-detail">
              <Image src={callIcon} alt="instagram" priority className="" />
              <Typography
                variant="p"
                label=": 070 631 5 212 , 071 713 1 416 , 070 631 5 211"
                styles="contact-detail-text poppins-regular"
              />
            </div>
            <div className="contact-detail">
              <Image src={emailIcon} alt="instagram" priority className="" />
              <Typography
                variant="p"
                label=": info@limacsl.com"
                styles="contact-detail-text poppins-regular"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

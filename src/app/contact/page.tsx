"use client";

import React, { useState } from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import { Typography } from "@/components/atoms/Typography";
import { Input } from "@/components/atoms/Input";
import { TextArea } from "@/components/atoms/TextArea";
import { Button } from "@/components/atoms/Button";
import mapIcon from "@/assets/images/map.png";
import callIcon from "@/assets/images/phone_solid.png";
import emailIcon from "@/assets/images/email.png";
import Image from "next/image";
import "./page.scss";

export default function About() {
  const [name, setName] = useState("");

  return (
    <main className="contact-page-wrapper">
      <HeroTextImage
        imageUrl="assets/images/contact.png"
        topic="Contact us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <Typography
        variant="p"
        label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        styles="contact-description poppins-regular"
      />

      <div className="content-section">
        <div className="left-content">
          <Typography
            variant="p"
            label="Contact Us"
            styles="contact-topic poppins-medium"
          />

          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Full Name"
            className="contact-input input-custom poppins-regular"
          />
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Email"
            className="contact-input input-custom poppins-bold"
          />
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Contact No"
            className="contact-input input-custom poppins-bold"
          />

          <TextArea
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Message Here"
            className="contact-text-area text-area poppins-bold"
          />

          <Button
            label="Send Message"
            className="contact-button poppins-medium"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
        <div className="right-content">
          <div className="contact">
            <div className="contact-detail">
              <Image src={mapIcon} alt="address" priority className="" />
              <Typography
                variant="h6"
                label=": Address"
                styles="contact-detail-topic poppins-semi-bold"
              />
              <Typography
                variant="p"
                label=": No:162, Main Road, Galle"
                styles="contact-detail-text poppins-regular"
              />
            </div>
            <div className="contact-detail">
              <Image src={callIcon} alt="call" priority className="" />
              <Typography
                variant="h6"
                label=": Phone"
                styles="contact-detail-topic poppins-semi-bold"
              />
              <Typography
                variant="p"
                label=": +94 12 356 8526"
                styles="contact-detail-text poppins-regular"
              />
            </div>
            <div className="contact-detail">
              <Image src={emailIcon} alt="email" priority className="" />
              <Typography
                variant="h6"
                label=": Email"
                styles="contact-detail-topic poppins-semi-bold"
              />
              <Typography
                variant="p"
                label=": test139238@gmail.com"
                styles="contact-detail-text poppins-regular"
              />
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d63371.8152914348!2d79.9196084!3d6.9008782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTQnMDMuMiJOIDc5wrA1NScxMC42IkU!5e0!3m2!1sen!2slk!4v1716987428499!5m2!1sen!2slk"
              className="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { HeroTextImage } from "@/components/molecules/HeroTextImage";
import {
  fbLink,
  instaLink,
  phoneLink,
  whatsappLink,
  phoneLink2,
  phoneLink3,
  emailLink,
} from "@/utils/constrants";
import { Typography } from "@/components/atoms/Typography";
import { Input } from "@/components/atoms/Input";
import { TextArea } from "@/components/atoms/TextArea";
import { Button } from "@/components/atoms/Button";
import mapIcon from "@/assets/images/map.png";
import callIcon from "@/assets/images/phone_solid.png";
import fbIcon from "@/assets/images/facebook.png";
import whatsappIcon from "@/assets/images/whatsapp.png";
import instaIcon from "@/assets/images/insta.png";
import emailIcon from "@/assets/images/email.png";
import Image from "next/image";
import "./page.scss";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="contact-page-wrapper">
      <div className="contact-page-container">
        <HeroTextImage
          imageUrl="assets/images/contact.png"
          topic="Contact us"
          description="here to bring your vision to life. Reach out to us — we’re just a message away."
        />

        <Typography
          variant="p"
          label="Let’s Build Something Exceptional Together"
          styles="contact-description poppins-regular"
        />

        <div className="content-section">
          <div className="left-content">
            <Typography
              variant="p"
              label="Contact Us"
              styles="contact-topic poppins-medium"
            />

            <div className="input-container">
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Full Name"
                className="contact-input input-custom poppins-regular"
              />
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="contact-input input-custom poppins-bold"
              />
              <Input
                value={mobileNo}
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                placeholder="Contact No"
                className="contact-input input-custom poppins-bold"
              />

              <TextArea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Your Message Here"
                className="contact-text-area text-area poppins-bold"
              />

              <Button
                label="Send Message"
                className="contact-button disable"
                onClick={() => {
                  console.log("clicked");
                }}
                disabled
              />
            </div>
            <div className="follow-us-container">
              <Typography
                variant="p"
                label="Follow Us"
                styles="contact-topic poppins-medium"
              />
              <div className="social-container">
                <div className="icon-container">
                  <a href={phoneLink} className="social-link">
                    <Image src={callIcon} alt="call" priority className="" />
                  </a>
                </div>
                <div className="icon-container">
                  <a
                    href={fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Image src={fbIcon} alt="fb" priority className="" />
                  </a>
                </div>
                <div className="icon-container">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Image
                      src={whatsappIcon}
                      alt="whatsapp"
                      priority
                      className=""
                    />
                  </a>
                </div>
                <div className="icon-container">
                  <a
                    href={instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Image
                      src={instaIcon}
                      alt="instagram"
                      priority
                      className=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="contact">
              <div className="contact-detail">
                <Image src={mapIcon} alt="address" priority className="" />
                <Typography
                  variant="h6"
                  label=":"
                  styles="contact-detail-topic-devider poppins-semi-bold"
                />

                <Typography
                  variant="h6"
                  label="Address"
                  styles="contact-detail-topic poppins-semi-bold"
                />

                <Typography
                  variant="p"
                  label=":"
                  styles="contact-detail-devider poppins-regular"
                />
                <Typography
                  variant="p"
                  label={
                    <>
                      <span className="custom-weight">
                        Limac Development Pvt Ltd
                      </span>
                      <br />{" "}
                      <span className="custom-weight">
                        No. 754/D, Pannipitiya Road,
                      </span>
                      <br />{" "}
                      <span className="custom-weight">
                        Battarmulla [Postal Code-10120],
                      </span>
                      <br /> <span className="custom-weight">Sri Lanka</span>
                    </>
                  }
                  styles="contact-detail-text poppins-regular"
                />
              </div>
              <div className="contact-detail">
                <Image src={callIcon} alt="call" priority className="" />
                <Typography
                  variant="h6"
                  label=":"
                  styles="contact-detail-topic-devider poppins-semi-bold"
                />
                <Typography
                  variant="h6"
                  label="Phone"
                  styles="contact-detail-topic poppins-semi-bold"
                />
                <Typography
                  variant="p"
                  label=":"
                  styles="contact-detail-devider poppins-regular"
                />
                <Typography
                  variant="p"
                  label={
                    <>
                      <a href={phoneLink2} className="social-link">
                        <span className="custom-weight">070 631 5 212</span>
                      </a>

                      <a href={phoneLink} className="social-link">
                        <span className="custom-weight">071 713 1 416</span>
                      </a>

                      <a href={phoneLink3} className="social-link">
                        <span className="custom-weight">070 631 5 211</span>
                      </a>
                    </>
                  }
                  styles="contact-detail-text poppins-regular"
                />
              </div>
              <div className="contact-detail">
                <Image src={emailIcon} alt="email" priority className="" />
                <Typography
                  variant="h6"
                  label=":"
                  styles="contact-detail-topic-devider poppins-semi-bold"
                />
                <Typography
                  variant="h6"
                  label="Email"
                  styles="contact-detail-topic poppins-semi-bold"
                />
                <Typography
                  variant="p"
                  label=":"
                  styles="contact-detail-devider poppins-regular"
                />
                <Typography
                  variant="p"
                  label={
                    <a href={emailLink} className="social-link">
                      info@limacsl.com
                    </a>
                  }
                  styles="contact-detail-text poppins-regular custom-weight"
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
      </div>
    </main>
  );
}

// components/organisms/Footer.tsx
import React from "react";
import { Typography } from "@/components/atoms/Typography";
import footerImg1 from "@/assets/images/footer_1.png";
import footerImg2 from "@/assets/images/footer_2.png";
import footerLogo from "@/assets/images/footer_logo.png";
import callIcon from "@/assets/images/call.png";
import fbIcon from "@/assets/images/facebook.png";
import whatsappIcon from "@/assets/images/whatsapp.png";
import instaIcon from "@/assets/images/insta.png";
import Image from "next/image";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Image
        src={footerImg1}
        alt="Footer image"
        priority
        className="footer-image"
      />
      <Image
        src={footerImg2}
        alt="Footer image"
        priority
        className="footer-image"
      />
      <div className="container">
        <div className="logo-container">
          <Image
            src={footerLogo}
            alt="Footer image"
            priority
            className="footer-logo"
          />
        </div>

        <div className="link-container">
          <Typography
            variant="p"
            label="Home"
            styles="link-text roboto-semi-bold"
          />
          <Typography
            variant="p"
            label="About"
            styles="link-text roboto-semi-bold"
          />
          <Typography
            variant="p"
            label="Projects"
            styles="link-text roboto-semi-bold"
          />
          <Typography
            variant="p"
            label="Services"
            styles="link-text roboto-semi-bold"
          />
          <Typography
            variant="p"
            label="Contact"
            styles="link-text roboto-semi-bold"
          />
        </div>

        <div className="social-container">
          <div className="icon-container">
            <Image src={callIcon} alt="call" priority className="" />
          </div>
          <div className="icon-container">
            <Image src={fbIcon} alt="fb" priority className="" />
          </div>
          <div className="icon-container">
            <Image src={whatsappIcon} alt="whatsapp" priority className="" />
          </div>
          <div className="icon-container">
            <Image src={instaIcon} alt="instagram" priority className="" />
          </div>
        </div>

        <div className="devider"></div>

        {/* Copyright */}
        <div className="copyright">
          <Typography
            variant="p"
            label="Copyright Limac Development (pvt) Ltd"
            styles="copyrightText roboto-semi-bold"
          />
        </div>
      </div>
    </footer>
  );
};

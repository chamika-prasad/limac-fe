// components/organisms/Footer.tsx
import React from "react";
import { Typography } from "@/components/atoms/Typography";
import footerImg1 from "@/assets/images/footer_1.png";
import footerImg2 from "@/assets/images/footer_2.png";
import footerLogo from "@/assets/images/footer_logo.png";
import callIcon from "@/assets/images/phone_solid.png";
import fbIcon from "@/assets/images/facebook.png";
import whatsappIcon from "@/assets/images/whatsapp.png";
import instaIcon from "@/assets/images/insta.png";
import { fbLink, instaLink, phoneLink, whatsappLink } from "@/utils/constrants";
import Image from "next/image";
import "./index.scss";
import Link from "next/link";

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
          <Link href="/" className="link-text">
            <Typography variant="p" label="Home" styles=" roboto-semi-bold" />
          </Link>
          <Link href="/about" className="link-text">
            <Typography variant="p" label="About" styles="roboto-semi-bold" />
          </Link>
          <Link href="/projects" className="link-text">
            <Typography
              variant="p"
              label="Projects"
              styles="roboto-semi-bold"
            />
          </Link>
          <Link href="/services" className="link-text">
            <Typography
              variant="p"
              label="Services"
              styles="roboto-semi-bold"
            />
          </Link>
          <Link href="/contact" className="link-text">
            <Typography variant="p" label="Contact" styles="roboto-semi-bold" />
          </Link>
        </div>

        <div className="social-container">
          <div className="icon-container">
            <a href={phoneLink} className="social-link">
              <Image
                src={callIcon}
                alt="call"
                priority
                className="social-icon"
              />
            </a>
          </div>
          <div className="icon-container">
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Image src={fbIcon} alt="fb" priority className="social-icon" />
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
                className="social-icon"
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
                className="social-icon"
              />
            </a>
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

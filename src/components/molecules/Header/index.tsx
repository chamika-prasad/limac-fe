"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import logo from "@/assets/images/logo.png";
import menu from "@/assets/images/menu.png";
import cancel from "@/assets/images/cancel.png";
import Link from "next/link";
import Image from "next/image";
import "./index.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = React.useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleScroll = () => {
    /* eslint-disable @typescript-eslint/no-unused-expressions */
    if (headerRef.current) {
      headerRef.current.style.visibility = "visible";
      window.scrollY !== 0
        ? (headerRef.current.style.visibility = "visible")
        : (headerRef.current.style.visibility = "hidden");
    }
    /* eslint-enable @typescript-eslint/no-unused-expressions */
  };

  useEffect(() => {
    // Set up initial auto-slide

    window.addEventListener("scroll", handleScroll);

    // Clean up timeouts on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        {/* Logo on the left */}
        <div className="header__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt="IDLIMAC Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="header__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Image src={cancel} alt="mobile menu close" quality={100} />
          ) : (
            <Image src={menu} alt="mobile menu" quality={100} />
          )}
        </div>

        {/* Navigation menu */}
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.path}
                  className="header__nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Typography
                    variant="p"
                    label={item.label}
                    styles="header__nav-link poppins-medium"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

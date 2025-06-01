"use client"; // This is required for Framer Motion in Next.js 13+

import { useEffect, useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import "./index.scss";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 9000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <div className="text-wrapper">
        <Typography
          variant="h1"
          label="LIMAC"
          styles="top-text poppins-medium"
        />
        <Typography
          variant="h6"
          label="Limac Development(pvt)Ltd."
          styles="bottom-text poppins-medium"
        />
      </div>
      <div className="left-slider"></div>
      <div className="left-vertical"></div>
      <div className="right-vertical"></div>
      <div className="right-slider"></div>
      <div className="Logo-wrapper">
        <Typography variant="h1" label="L" styles="logo-l poppins-medium" />
        <Typography variant="h1" label="D" styles="logo-d poppins-medium" />
        <div className="devider"></div>
      </div>
    </div>
  ) : null;
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

const FadingCarousel = () => {
  const autoplayInterval = 9000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // Default images if none provided
  const slideImageitems = [
    {
      // image: "assets/images/home_bg_01.jpg",
      image: `${process.env.NEXT_PUBLIC_API_URL}/uploads/home/home_bg_01.jpg`,
      title: "Welcome",
      description:
        "“From Iconic Residences To Landmark Commercial Spaces, We Deliver Elegance Through Engineering.”",
    },
    {
      image: `${process.env.NEXT_PUBLIC_API_URL}/uploads/home/home_bg_02.png`,
      title: "Vision",
      description:
        "“To lead Sri Lanka's construction industry through innovation, affordability, and sustainable development.”",
    },
    {
      image: `${process.env.NEXT_PUBLIC_API_URL}/uploads/home/home_bg_03.jpg`,
      title: "Mission",
      description:
        "“To deliver quality, cost-effective, and responsible building solutions while empowering communities and exceeding client expectations.”",
    },
    {
      image: `${process.env.NEXT_PUBLIC_API_URL}/uploads/home/home_bg_04.jpg`,
      title: "Join Us",
      description:
        "“Whether you’re planning your next luxury development or seeking a trusted construction partner, we’re here to bring your vision to life. Reach out to us”",
    },
  ];

  const handleClick = () => {
    router.push(`/projects`);
  };

  useEffect(() => {
    if (slideImageitems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImageitems.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [slideImageitems.length, autoplayInterval]);

  return (
    <div className="slide-container">
      {slideImageitems.map((item, index) => (
        <div
          key={index}
          className={`image-wrapper ${index === currentIndex ? "active" : ""}`}
        >
          <img
            src={item.image}
            alt={`Slide ${index + 1}`}
            className="image-slide"
          />
          <AnimatePresence mode="wait">
            <motion.div
              className="content"
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  variant={
                    slideImageitems[currentIndex].title === "Welcome"
                      ? "p"
                      : "h1"
                  }
                  label={slideImageitems[currentIndex].title}
                  styles={`title merriweather-semi-bold ${
                    slideImageitems[currentIndex].title === "Welcome"
                      ? "welcome-title"
                      : "defaul-title"
                  }`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Typography
                  variant={
                    slideImageitems[currentIndex].title === "Welcome"
                      ? "h1"
                      : "p"
                  }
                  label="LIMAC DEVELOPMENT (PVT) LTD"
                  styles={`name merriweather-regular ${
                    slideImageitems[currentIndex].title === "Welcome"
                      ? "welcome-name"
                      : "default-name"
                  }`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Typography
                  variant="p"
                  label={slideImageitems[currentIndex].description}
                  styles="des poppins-extra-bold"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="btn">
                  <Button
                    label="See Our Work"
                    onClick={handleClick}
                    className="cta-button"
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="overlay" />
          <div className="dark-overlay" />
          <img src="/assets/images/home_logo.png" alt="" className="home-logo" />
        </div>
      ))}
    </div>
  );
};

export default FadingCarousel;

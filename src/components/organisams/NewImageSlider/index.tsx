import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

interface ImageSliderProps {
  images?: string[];
  autoPlayInterval?: number;
  rowCount?: number;
  animationDuration?: number;
}

const NewImageSlider: React.FC<ImageSliderProps> = ({
  images = [
    "/assets/images/home_bg_03.jpg",
    "/assets/images/home_bg_01.jpg",
    "/assets/images/home_bg_02.png",
    "/assets/images/home_bg_04.jpg",
  ],
  autoPlayInterval = 3000,
  rowCount = 6,
  animationDuration = 0.8,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // Calculate total animation time including all row delays
  const totalAnimationTime = animationDuration + (rowCount - 1) * 0.1;

  const items = [
    {
      image: "/assets/images/home_bg_01.jpg",
      title: "Welcome",
      description:
        "“From Iconic Residences To Landmark Commercial Spaces, We Deliver Elegance Through Engineering.”",
    },
    {
      image: "/assets/images/home_bg_02.png",
      title: "Vision",
      description:
        "“To lead Sri Lanka's construction industry through innovation, affordability, and sustainable development.”",
    },
    {
      image: "/assets/images/home_bg_03.jpg",
      title: "Mission",
      description:
        "“To deliver quality, cost-effective, and responsible building solutions while empowering communities and exceeding client expectations.”",
    },
    {
      image: "/assets/images/home_bg_04.jpg",
      title: "Join Us",
      description:
        "“Whether you’re planning your next luxury development or seeking a trusted construction partner, we’re here to bring your vision to life. Reach out to us”",
    },
  ];

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === currentIndex) return;

      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }, totalAnimationTime * 1000);
    },
    [currentIndex, isAnimating, totalAnimationTime]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, Math.max(autoPlayInterval, totalAnimationTime * 1000 + 500));

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, totalAnimationTime]);

  const handleIndicatorClick = (index: number) => {
    setAutoPlay(false);
    goToSlide(index);
    setTimeout(() => setAutoPlay(true), autoPlayInterval * 2);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <AnimatePresence>
          {Array.from({ length: rowCount }).map((_, i) => {
            const bgPosition = (i * 100) / (rowCount - 1);
            const delay = i * 0.1;

            return (
              <motion.div
                key={`${currentIndex}-${i}`}
                className="slider-row"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 180 }}
                transition={{
                  delay,
                  duration: animationDuration,
                  ease: "easeInOut",
                }}
                style={{
                  top: `${(i * 100) / rowCount}%`,
                  height: `calc(${100 / rowCount}% + 1px)`, // Ensure overlap
                  background: `linear-gradient(
                      to bottom,
                      transparent 0%,
                      transparent 99%,
                      #000 100%
                    )`, // Edge anti-aliasing
                }}
              >
                <div
                  className="row-front"
                  style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundPosition: `center ${bgPosition}%`,
                    backgroundSize: `100% ${rowCount * 100 + 0.2}%`,
                  }}
                />
                <div
                  className="row-back"
                  style={{
                    backgroundImage: `url(${
                      images[(currentIndex + 1) % images.length]
                    })`,
                    backgroundPosition: `center ${bgPosition}%`,
                    backgroundSize: `100% ${rowCount * 100 + 0.2}%`,
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button
        className="nav-button prev-button"
        onClick={prevSlide}
        disabled={isAnimating}
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="nav-button next-button"
        onClick={nextSlide}
        disabled={isAnimating}
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
              variant={items[currentIndex].title === "Welcome" ? "p" : "h1"}
              label={items[currentIndex].title}
              styles={`title merriweather-semi-bold ${
                items[currentIndex].title === "Welcome"
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
              variant={items[currentIndex].title === "Welcome" ? "h1" : "p"}
              label="LIMAC DEVELOPMENT (PVT) LTD"
              styles={`name merriweather-regular ${
                items[currentIndex].title === "Welcome"
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
              label={items[currentIndex].description}
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
                onClick={() => {
                  console.log("");
                }}
                className="cta-button"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <img src="/assets/images/home_logo.png" alt="" className="home-logo"/>

      <div className="slider-overlay" />
    </div>
  );
};

export default NewImageSlider;

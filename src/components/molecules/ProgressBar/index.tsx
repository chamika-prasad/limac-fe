import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./index.scss";

interface ProgressBarProps {
  delay?: number;
}

const ProgressBar = ({ delay = 0 }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 2;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className="progress-bar-container" ref={itemRef}>
      <div
        className={classNames(
          "progress-bar-fill",
          isVisible ? "visible" : "hidden"
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;

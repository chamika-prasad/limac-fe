import React from "react";
import "./index.scss";

interface LoaderProps {
  isTransitioning: boolean;
}

const Loader = ({ isTransitioning }: LoaderProps) => {
  return (
    <div
      className={`loader-container ${isTransitioning ? "page-transition" : ""}`}
    >
      <img
        src="/assets/images/home_logo.png"
        alt="Loading..."
        className="loader-image"
      />
    </div>
  );
};

export default Loader;

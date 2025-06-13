import React from "react";
import classNames from "classnames";
import "./index.scss";

interface LoaderProps {
  isTransitioning: boolean;
  hide: boolean;
}

const Loader = ({ isTransitioning, hide }: LoaderProps) => {
  return (
    <div
      className={classNames("loader-container" ,isTransitioning ? "page-transition" : "", hide ? "hide" : "")}
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

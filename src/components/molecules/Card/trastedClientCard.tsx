import { Typography } from "@/components/atoms/Typography";
import React from "react";
import "./trustedClientCard.scss";
import classNames from "classnames";

interface ITrustedClientCardProps {
  Key: number;
  clientName: string;
  clientImage: string;
  className?: string;
}

export const TrustedClientCard = ({
  Key,
  clientName,
  clientImage,
  className,
}: ITrustedClientCardProps) => {
  return (
    <div
      key={Key}
      className={classNames("client-wrapper", className ? className : "")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={clientImage}
        alt={`${clientName}-logo`}
        className="client-logo"
      />
      <Typography
        variant="p"
        label={clientName}
        styles="client-name poppins-bold"
      />
    </div>
  );
};

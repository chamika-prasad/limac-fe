"use client";

import classNames from "classnames";
import React, { ReactNode } from "react";

interface IButtonProps {
  label: string | ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  className,
  disabled = false,
}: IButtonProps) => {
  return (
    <button
      className={classNames(className, "poppins-medium")}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

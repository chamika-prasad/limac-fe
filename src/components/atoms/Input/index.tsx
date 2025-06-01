import React from "react";

interface IInputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  placeholder?: string;
}

export const Input = ({
  onChange,
  className,
  value,
  placeholder,
}: IInputProps) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

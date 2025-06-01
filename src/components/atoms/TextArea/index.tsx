import React from "react";

interface IInputProps {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  value: string;
  placeholder?: string;
}

export const TextArea = ({
  onChange,
  className,
  value,
  placeholder,
}: IInputProps) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

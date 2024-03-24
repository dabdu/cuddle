import React, { FC } from "react";
interface ButtonProps {
  text: string;
  outlined?: boolean;
}
const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="text-center px-14 py-3 bg-primary text-white font-semibold text-sm rounded-md">
      {text}
    </button>
  );
};

export default Button;

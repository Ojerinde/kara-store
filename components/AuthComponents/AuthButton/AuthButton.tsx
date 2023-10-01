import React from "react";

interface AuthButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  background: "red" | "white";
  className?: string;
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  type,
  onClick,
  background,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        background === "red"
          ? "bg-custom-red text-white"
          : "bg-custom-white text-custom-red border border-custom-black-2 rounded"
      } ${className} w-full h-[4.1rem] text-[1.6rem] font-semibold hover:-translate-y-[.3rem] active:-translate-y-[.1rem] duration-300`}
    >
      {children}
    </button>
  );
};
export default AuthButton;

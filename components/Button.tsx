import React, { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};


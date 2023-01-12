import React, { FC } from "react";
import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  isSquare: boolean;
  growOnHover: boolean;
};

export const Card: FC<CardProps> = ({
  children,
  isSquare,
  growOnHover = true,
}) => {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-gray-200 transition-all flex justify-between flex-col shadow-sm overflow-hidden",
        {
          "aspect-square": isSquare,
          "aspect-video": !isSquare,
          "hover:scale-105 hover:shadow-md hover:bg-opacity-90": growOnHover,
        }
      )}
    >
      {children}
    </div>
  );
};

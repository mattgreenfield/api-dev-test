import React, { FC } from 'react';
import classNames from 'classnames';

type CardProps = {
  children: React.ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div
      className={classNames(
        'rounded-2xl border border-gray-200 aspect-square transition-all flex justify-between flex-col shadow-sm overflow-hidden',
        'hover:scale-105 hover:shadow-md hover:bg-opacity-90',
      )}
    >
      {children}
    </div>
  );
};

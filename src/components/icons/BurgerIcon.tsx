import React from 'react';
import { IconType } from 'src/utils/types/icons';

export const BurgerIcon: React.FC<IconType> = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      height={size ? size : 24}
      fill={color}>
      <path d="M3 8h18a1 1 0 000-2H3a1 1 0 000 2zm18 8H3a1 1 0 000 2h18a1 1 0 000-2zm0-5H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

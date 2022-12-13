import React from 'react';
import { IconType } from 'src/utils/types/icons';

export const ClipIcon: React.FC<IconType> = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      className={className}
      height={size ? size : 24}
      fill={'none'}
      stroke={color}>
      <path
        d="m12.172 5-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656L2.757 8.757a6 6 0 1 0 8.486 8.486L17.5 11"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

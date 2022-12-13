import React from 'react';
import { IconType } from 'src/utils/types/icons';

export const CaseIcon: React.FC<IconType> = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      className={className}
      height={size ? size : 24}
      fill={'none'}
      stroke={color}>
      <path
        d="M19 12.255A23.931 23.931 0 0 1 10 14c-3.183 0-6.22-.62-9-1.745M14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2m4 6h.01M3 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

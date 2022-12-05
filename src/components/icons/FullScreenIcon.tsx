import * as React from 'react';
import { IconType } from '../../utils/types/icons';

const FullScreenIcon: React.FC<IconType> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size ? size : 24}
    height={size ? size : 24}
    fill={color}>
    <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" />
  </svg>
);

export default FullScreenIcon;

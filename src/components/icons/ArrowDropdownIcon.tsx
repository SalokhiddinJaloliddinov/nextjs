import * as React from 'react';
import { IconType } from '../../utils/types/icons';

const ArrowDropdownIcon: React.FC<IconType> = ({ size, color }) => (
  <svg
    className="header-icon-svgs"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size ? size : 24}
    height={size ? size : 24}
    fill={color}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
  </svg>
);

export default ArrowDropdownIcon;

import * as React from 'react';
import { IconType } from '../../utils/types/icons';

const MailIcon: React.FC<IconType> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="header-icon-svgs"
    width={size ? size : 24}
    height={size ? size : 24}
    viewBox="0 0 24 24"
    fill={color}>
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
  </svg>
);

export default MailIcon;

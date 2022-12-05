import * as React from 'react';

type SearchIconProps = {
  size?: 'string | number | undefined';
};

const SearchIcon: React.FC<SearchIconProps> = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search">
    <circle cx={13} cy={13} r={5} />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export default SearchIcon;

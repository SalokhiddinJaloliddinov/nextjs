import Link from 'next/link';
import React from 'react';
import { NavButtonProps } from 'src/utils/types';

const NavButton: React.FC<NavButtonProps> = ({ obj, path }) => {
  return (
    <Link
      href={obj.href}
      className={
        'text-gray-500 rounded-md py-2 px-3 inline-flex text-sm font-medium transition-colors' +
        ' ' +
        (path === obj.href ? 'bg-gray-100 text-black' : 'hover:bg-gray-50 hover:text-gray-900')
      }>
      <obj.icon size={20} className={`${path !== obj.href ? 'fill-gray-500' : ''}`} />
      <span className={'ml-2.5'}>{obj.name}</span>
    </Link>
  );
};

export { NavButton };

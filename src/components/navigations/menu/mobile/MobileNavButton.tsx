import React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavButtonProps } from 'src/utils/types';
import Link from 'next/link';

const MobileNavButton: React.FC<NavButtonProps> = ({ obj, path }) => {
  return (
    <Disclosure.Button
      as={Link}
      href={obj.href}
      className={
        'block rounded-md py-2 px-3 text-base font-medium text-gray-900' +
        ' ' +
        (path === obj.href ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50 hover:text-gray-900')
      }>
      {obj.name}
    </Disclosure.Button>
  );
};

export { MobileNavButton };

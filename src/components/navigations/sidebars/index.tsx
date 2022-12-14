import Link from 'next/link';
import React from 'react';
import { MoonIcon } from 'src/components/icons';
import { SidebarProps } from 'src/utils/types';

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="bg-white rounded flex flex-col items-center py-6 px-6 shadow-md">
      <Link
        href="#"
        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded text-center transition-colors leading-5 mb-6">
        ADD_TICKET
      </Link>
      <Link href="#" className="flex items-center w-full py-3 relative text-sm">
        <div className="h-8 w-8 mr-6 bg-gray-100 rounded-full flex justify-center items-center">
          <MoonIcon className="h-4 w-4 fill-gray-600" />
        </div>
        UserRequest
        <span className="py-0.5 px-1.5 bg-red-600 text-white leading-4 rounded text-xs absolute right-0">
          2
        </span>
      </Link>
      <Link href="#" className="flex items-center w-full py-3 relative text-sm">
        <div className="h-8 w-8 mr-6 bg-gray-100 rounded-full flex justify-center items-center">
          <MoonIcon className="h-4 w-4 fill-gray-600" />
        </div>
        UserRequest
        <span className="py-0.5 px-1.5 bg-red-600 text-white leading-4 rounded text-xs absolute right-0">
          2
        </span>
      </Link>
      <Link href="#" className="flex items-center w-full py-3 relative text-sm">
        <div className="h-8 w-8 mr-6 bg-gray-100 rounded-full flex justify-center items-center">
          <MoonIcon className="h-4 w-4 fill-gray-600" />
        </div>
        UserRequest
        <span className="py-0.5 px-1.5 bg-red-600 text-white leading-4 rounded text-xs absolute right-0">
          2
        </span>
      </Link>
      <Link href="#" className="flex items-center w-full py-3 relative text-sm">
        <div className="h-8 w-8 mr-6 bg-gray-100 rounded-full flex justify-center items-center">
          <MoonIcon className="h-4 w-4 fill-gray-600" />
        </div>
        UserRequest
        <span className="py-0.5 px-1.5 bg-red-600 text-white leading-4 rounded text-xs absolute right-0">
          2
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;

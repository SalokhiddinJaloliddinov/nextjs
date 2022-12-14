import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';

import styles from './Header.module.scss';
import olimjon from 'src/__assets__/olimjon.jpg';

import { MagnifyingGlassIcon, XMarkIcon, TagIcon } from '@heroicons/react/24/solid';
import { SdLogo } from 'src/components/logos/SdLogo';
import { BellIcon, BurgerIcon, MailIcon, MoonIcon, SunIcon } from 'src/components/icons';
import MobileNav from 'src/components/navigations/menu/mobile/MobileNav';
import Nav from 'src/components/navigations/menu/Nav';
import { Meta } from '../../meta';
import { classNames } from 'src/utils/scripts';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: olimjon.src,
};
const userNavigation = [
  { name: 'Мой профиль', href: '#' },
  { name: 'Настройки', href: '#' },
  { name: 'Выйти', href: '#' },
];

const MainHeader = () => {
  const [theme, setTheme] = useState(false);
  return (
    <Disclosure as="header" className={`${styles.shadow} bg-white`}>
      {({ open }) => (
        <>
          <div className="px-2 sm:px-4 lg:divide-y lg:divide-gray-200">
            <div className="relative h-16 flex justify-between lg:px-32">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <SdLogo />
                </div>
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Поиск
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
                      placeholder="Поиск"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <BurgerIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  onClick={() => setTheme(!theme)}
                  className="mr-3 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  {theme ? (
                    <SunIcon aria-hidden="true" color={'#7b8191'} size={20} />
                  ) : (
                    <MoonIcon aria-hidden="true" color={'#7b8191'} size={20} />
                  )}
                </button>
                <button
                  type="button"
                  className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" size={20} color={'#7b8191'} />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="flex-shrink-0 relative ml-4">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700',
                              )}>
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/* Navigation Menu */}
            <Nav />
          </div>
          {/* Mobile Navigation Menu */}
          <MobileNav />
        </>
      )}
    </Disclosure>
  );
};

export default MainHeader;

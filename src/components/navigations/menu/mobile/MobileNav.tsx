import React from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "src/components/icons";
import olimjon from "src/__assets__/olimjon.jpg";
import { useRouter } from "next/router";
import { MobileNavButton } from "./MobileNavButton";
import { NAVIGATION_LINKS, USER_NAVIGATIONS } from "src/constants";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: olimjon.src,
};

const MobileNav = () => {
  const router = useRouter();
  return (
    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
      <div className="pt-2 pb-3 px-2 space-y-1">
        {NAVIGATION_LINKS.map((obj) => (
          <MobileNavButton obj={obj} path={router.asPath} key={obj.name} />
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="px-4 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">
              {user.name}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {user.email}
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          {USER_NAVIGATIONS.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default MobileNav;

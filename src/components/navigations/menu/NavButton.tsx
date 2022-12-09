import React from "react";
import { NavButtonProps } from "src/utils/types";

const NavButton: React.FC<NavButtonProps> = ({ obj, path }) => {
  return (
    <a
      href={obj.href}
      className={
        "text-gray-900 block rounded-md py-2 px-3 inline-flex text-sm font-medium" +
        " " +
        (path === obj.href
          ? "bg-gray-100 text-gray-900"
          : "hover:bg-gray-50 hover:text-gray-900")
      }
    >
      <obj.icon size={20} />
      <span className={"ml-2.5"}>{obj.name}</span>
    </a>
  );
};

export { NavButton };

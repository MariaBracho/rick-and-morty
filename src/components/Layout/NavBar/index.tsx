import { componentType } from "@/types/generalTypes";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MENU_LIST } from "@/utilities/constants/menuList";

export default function NavBar(): componentType {
  const [showDropDown, setShowDropDown] = useState(false);

  const TITLE = "Rick and morty";

  return (
    <div className="navbar bg-transparent ">
      <div className="navbar-start">
        <p className="text-xl font-bold">{TITLE}</p>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <HiMenu
            className="h-8 w-8 cursor-pointer"
            onClick={() => setShowDropDown((isShow) => !isShow)}
          />
          {showDropDown && (
            <ul className="menu opacity-100 visible menu-compact absolute mt-2 p-2 shadow bg-base-200 rounded-box w-52 right-0 z-20">
              {MENU_LIST.map(({ name, route }): JSX.Element => {
                return (
                  <li key={route}>
                    <NavLink to={route}>{name}</NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

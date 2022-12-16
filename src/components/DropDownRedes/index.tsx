import { componentType } from "@/types/generalTypes";
import {
  BsFillShareFill,
  BsFacebook,
  BsPinterest,
  BsWhatsapp,
} from "react-icons/bs";
import { useState } from "react";

export default function DropDownRedes({
  cardImage,
}: {
  cardImage: string;
}): componentType {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const handledDropDown = (): void => {
    setShowDropDown((isShow) => !isShow);
  };

  return (
    <div className="relative">
      <BsFillShareFill
        className="text-primary h-6 w-6 cursor-pointer"
        onClick={handledDropDown}
      />
      {showDropDown && (
        <div className="menu opacity-100 visible menu-compact absolute mt-2 p-2 shadow bg-base-200 rounded-box w-52 right-0 z-20 flex flex-row justify-around">
          <li className="w-min">
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsFacebook className="text-primary h-6 w-6 cursor-pointer" />
            </a>
          </li>
          <li className="w-min">
            <a
              target="_blank"
              href={`https://pinterest.com/pin/create/button/?media=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsPinterest className="text-primary h-6 w-6 cursor-pointer" />
            </a>
          </li>
          <li className="w-min">
            <a
              target="_blank"
              href={`whatsapp://send?text=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="text-primary h-6 w-6 cursor-pointer" />
            </a>
          </li>
        </div>
      )}
    </div>
  );
}

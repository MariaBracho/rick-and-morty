import { useState } from "react";
import { componentType } from "@/types/generalTypes";
import {
  BsFillShareFill,
  BsFacebook,
  BsPinterest,
  BsWhatsapp,
} from "react-icons/bs";

export default function DropDownNetworkSocial({
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
        className="socialNetworkIcon"
        onClick={handledDropDown}
      />
      {showDropDown && (
        <div className="dropDownNetworkSocial">
          <li className="w-min">
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsFacebook className="socialNetworkIcon" />
            </a>
          </li>
          <li className="w-min">
            <a
              target="_blank"
              href={`https://pinterest.com/pin/create/button/?media=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsPinterest className="socialNetworkIcon" />
            </a>
          </li>
          <li className="w-min">
            <a
              target="_blank"
              href={`whatsapp://send?text=${cardImage}`}
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="socialNetworkIcon" />
            </a>
          </li>
        </div>
      )}
    </div>
  );
}

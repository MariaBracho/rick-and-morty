import { BsFillHeartFill } from "react-icons/bs";
import { componentType } from "@/types/generalTypes";
import { SingleCharaterCardProps } from "@/types/models/charaters";
import useCharaterFavorite from "@/hooks/useCharaterFavorite";
import DropDownRedes from "../DropDownRedes";

export default function SingleCharaterCard({
  image,
  name,
  location,
  gender,
  id,
}: SingleCharaterCardProps): componentType {
  const { handledFavorite, isFavorite } = useCharaterFavorite({
    singleCard: { image, name, location, gender, id },
  });
  return (
    <div className="w-40 h-48">
      <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
        <img
          className="absolute h-full w-full top-0 right-0 object-cover"
          src={image}
          alt="charater"
        />
        <div className="absolute top-0 right-0 h-6 min-w-max w-11 px-2 flex justify-center items-center bg-secondary rounded-l-xl">
          <p className="text-sm">{gender}</p>
        </div>
        <div className="h-9  w-full absolute bottom-0  rounded-b-xl bg-neutral/90 py-1 px-2 backdrop-opacity-1">
          <p className="text-primary-content text-sm font-medium leading-none  truncate">
            {name}
          </p>
          <p className="text-primary-content text-xs leading-none truncate ">
            {location}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 p-2">
        <BsFillHeartFill
          className={`${
            isFavorite ? "text-error" : "text-base-300"
          } h-6 w-6 cursor-pointer`}
          onClick={handledFavorite}
        />
        <DropDownRedes cardImage={image} />
      </div>
    </div>
  );
}

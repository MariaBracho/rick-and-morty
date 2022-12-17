import { componentType } from "@/types/generalTypes";
import { FiSearch } from "react-icons/fi";

interface CardInputSearchProps {
  handledFilter: ({ target }: { target: { value: string } }) => void;
}

export default function CardInputSearch({
  handledFilter,
}: CardInputSearchProps): componentType {
  return (
    <label
      tabIndex={0}
      className="h-8 w-60 flex items-center border-b-2  border-base-300 hover:border-primary focus:border-primary "
    >
      <FiSearch className="w-1/5 h-6" />
      <input
        tabIndex={0}
        className="w-4/5 outline-none border-none bg-transparent"
        placeholder="Search characters"
        type="text"
        onChange={handledFilter}
      />
    </label>
  );
}

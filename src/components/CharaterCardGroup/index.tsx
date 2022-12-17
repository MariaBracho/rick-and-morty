import { componentType } from "@/types/generalTypes";
import { SingleCharaterCardProps } from "@/types/models/characters";

// components
import SingleCharaterCard from "../SingleCharaterCard";

interface CardListProps {
  cardList: SingleCharaterCardProps[];
  title: string;
}

export default function CharaterCardGroup({
  cardList,
  title,
}: CardListProps): componentType {
  const isEmpetyList = cardList.length === 0;
  const EMPETY_LIST = "Empty favorites list";
  return (
    <div>
      <p className="text-xl font-bold my-4">{title}</p>
      {isEmpetyList ? (
        <div className="grid place-content-center w-full min-h-screen">
          <p>{EMPETY_LIST}</p>
        </div>
      ) : (
        <div className="flex justify-center flex-wrap gap-x-2 gap-y-3 md:gap-6 min-h-screen">
          {cardList.map((props: SingleCharaterCardProps) => {
            return <SingleCharaterCard key={props.id} {...props} />;
          })}
        </div>
      )}
    </div>
  );
}

import { componentType } from "@/types/generalTypes";
import { SingleCharaterCardProps } from "@/types/models/charaters";

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
  return (
    <div>
      <p className="text-xl font-bold my-4">{title}</p>
      <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 md:gap-6 min-h-screen">
        {cardList.map(({ image, name, location, gender, id }) => {
          return (
            <SingleCharaterCard
              key={id}
              image={image}
              name={name}
              location={location}
              gender={gender}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

import { componentType } from "@/types/generalTypes";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getCharaterFavorite } from "@/redux/charaters/charaterSlice";

export default function CharaterFavorite(): componentType {
  const charaterFavorites = useAppSelector(getCharaterFavorite);

  return <CharaterCardGroup title="Favorites" cardList={charaterFavorites} />;
}

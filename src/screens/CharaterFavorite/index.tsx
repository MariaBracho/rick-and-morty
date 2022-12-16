import { componentType } from "@/types/generalTypes";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getCharaterFavorite } from "@/redux/charaters/charaterSlice";
import { Helmet } from "react-helmet-async";

export default function CharaterFavorite(): componentType {
  const charaterFavorites = useAppSelector(getCharaterFavorite);

  return (
    <>
      <Helmet>
        <title>Rick and Morty | favorites</title>
      </Helmet>
      <CharaterCardGroup title="Favorites" cardList={charaterFavorites} />
    </>
  );
}

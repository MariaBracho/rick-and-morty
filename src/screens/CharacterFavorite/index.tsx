import { componentType } from "@/types/generalTypes";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getCharaterFavorite } from "@/redux/charaters/charaterSlice";
import { Helmet } from "react-helmet-async";
import { HELMET_TITLE } from "@/utilities/constants/helmetTitle";

export default function CharacterFavorite(): componentType {
  const charaterFavorites = useAppSelector(getCharaterFavorite);

  return (
    <>
      <Helmet>
        <title>{HELMET_TITLE.favoriteCharacters}</title>
      </Helmet>
      <CharaterCardGroup
        title="Characters favorites"
        cardList={charaterFavorites}
      />
    </>
  );
}

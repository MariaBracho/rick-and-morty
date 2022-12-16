import { componentType } from "@/types/generalTypes";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  getCharaterFavorite,
  getCardStatus,
} from "@/redux/charaters/charaterSlice";
import { FetchStatus } from "@/types/enums";
import Spin from "@/components/Spin";

export default function CharaterFavorite(): componentType {
  const charaterFavorites = useAppSelector(getCharaterFavorite);
  const status = useAppSelector(getCardStatus);
  const isSucces = status === FetchStatus.SUCCEEDED;
  return (
    <>
      {isSucces ? (
        <CharaterCardGroup title="Favorites" cardList={charaterFavorites} />
      ) : (
        <Spin />
      )}
    </>
  );
}

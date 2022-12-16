import { useState, useEffect } from "react";
import { useAppDispatch } from "../useAppDispatch";
import { useAppSelector } from "../useAppSelector";
import {
  addFavorite,
  deleteFavorite,
  getCharaterFavorite,
} from "@/redux/charaters/charaterSlice";
import { SingleCharaterCardProps } from "@/types/models/charaters";

interface returnCharateFavorite {
  handledFavorite: () => void;
  isFavorite: boolean;
}

export default function useCharaterFavorite({
  singleCard,
}: {
  singleCard: SingleCharaterCardProps;
}): returnCharateFavorite {
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getCharaterFavorite);

  useEffect(() => {
    const isFavoriteCard: boolean = favorites.some(
      (card) => card.id === singleCard.id
    );
    setFavorite(isFavoriteCard);
  }, [singleCard]);

  const handledFavorite = (): void => {
    setFavorite((isFavorite) => !isFavorite);
    isFavorite
      ? dispatch(deleteFavorite({ id: singleCard.id }))
      : dispatch(addFavorite(singleCard));
  };
  return { handledFavorite, isFavorite };
}

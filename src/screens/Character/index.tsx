import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// redux
import { fetchCharaterGroup } from "@/redux/charaters/thunk";
import {
  getCharaters,
  getPages,
  getCardStatus,
} from "@/redux/charaters/charaterSlice";

// utils
import { HELMET_TITLE } from "@/utilities/constants/helmetTitle";

// types
import { FetchStatus } from "@/types/enums";
import { componentType } from "@/types/generalTypes";

// hooks
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useFilterCharater } from "@/hooks/useFilterCharater";
import { useAppSelector } from "@/hooks/useAppSelector";

// components
import CardInputSearch from "@/components/CardInputSearch";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import Pagination from "@/components/Pagination.tsx";
import Spin from "@/components/Spin";

export default function Character(): componentType {
  const charaters = useAppSelector(getCharaters);
  const pages = useAppSelector(getPages);
  const status = useAppSelector(getCardStatus);
  const dispatch = useAppDispatch();
  const { filter } = useFilterCharater();

  const isSucces = status === FetchStatus.SUCCEEDED;

  useEffect(() => {
    const promise = dispatch(fetchCharaterGroup({ pages }));
    return (): void => {
      promise.abort();
    };
  }, [pages]);

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>{HELMET_TITLE.characters}</title>
      </Helmet>
      <CardInputSearch handledFilter={filter} />
      {isSucces ? (
        <CharaterCardGroup cardList={charaters} title="Charaters" />
      ) : (
        <Spin />
      )}
      <Pagination />
    </div>
  );
}

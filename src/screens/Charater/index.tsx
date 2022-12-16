import { componentType } from "@/types/generalTypes";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchCharaterGroup } from "@/redux/charaters/thunk";
import { useFilterCharater } from "@/hooks/useFilterCharater";
import {
  getCharaters,
  getPages,
  getCardStatus,
} from "@/redux/charaters/charaterSlice";
import { FetchStatus } from "@/types/enums";

// components
import CardInputSearch from "@/components/CardInputSearch";
import CharaterCardGroup from "@/components/CharaterCardGroup";
import Pagination from "@/components/Pagination.tsx";
import Spin from "@/components/Spin";

export default function Charater(): componentType {
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

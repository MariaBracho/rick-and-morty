import { useEffect } from "react";
import { useParams } from "react-router-dom";

// types
import { componentType } from "@/types/generalTypes";
import { FetchStatus } from "@/types/enums";

// redux
import { fetchCharaterInfo } from "@/redux/charaters/thunk";
import {
  getSingleCharater,
  getCardStatus,
} from "@/redux/charaters/charaterSlice";

// hooks
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

// components
import SingleInfoCard from "@/components/CharacterDetail";
import Spin from "@/components/Spin";

export default function Characterdetail(): componentType {
  const charater = useAppSelector(getSingleCharater);
  const statusFecth = useAppSelector(getCardStatus);
  const dispatch = useAppDispatch();

  const isSucces = statusFecth === FetchStatus.SUCCEEDED;
  const { id: idCharater } = useParams();

  useEffect(() => {
    const promise = dispatch(fetchCharaterInfo({ id: Number(idCharater) }));
    return (): void => {
      promise.abort();
    };
  }, []);

  return isSucces ? <SingleInfoCard {...charater} /> : <Spin />;
}

import { componentType } from "@/types/generalTypes";
import SingleInfoCard from "@/components/SingleInfoCard";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  getSingleCharater,
  getCardStatus,
} from "@/redux/charaters/charaterSlice";
import { fetchCharaterInfo } from "@/redux/charaters/thunk";
import { useParams } from "react-router-dom";
import Spin from "@/components/Spin";
import { useEffect } from "react";
import { FetchStatus } from "@/types/enums";

export default function InfoCard(): componentType {
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

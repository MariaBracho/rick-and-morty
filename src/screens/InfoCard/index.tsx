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
import { SingleInformationCardProps } from "@/types/models/charaters";

export default function InfoCard(): componentType {
  const charater = useAppSelector(getSingleCharater);
  const status = useAppSelector(getCardStatus);
  const dispatch = useAppDispatch();

  const isSucces = status === FetchStatus.SUCCEEDED;
  const { id } = useParams();

  useEffect(() => {
    const promise = dispatch(fetchCharaterInfo({ id: Number(id) }));
    return (): void => {
      promise.abort();
    };
  }, []);

  const { ...props }: SingleInformationCardProps | {} = charater;
  return isSucces ? <SingleInfoCard image={image} {...props} /> : <Spin />;
}

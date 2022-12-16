import { FetchStatus } from "../enums";

export interface CharaterInitialStateType {
  status: FetchStatus;
  pages: number;
  charaters: SingleCharaterCardProps[];
  charatersFavorite: SingleCharaterCardProps[] | [];
}

export interface SingleCharaterCardProps {
  image: string;
  name: string;
  location: string;
  gender: string;
  id: number;
}

export interface charaterProps {
  id: number;
  name: string;
  location: { name: string };
  gender: string;
  image: string;
}

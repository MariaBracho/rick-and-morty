import { FetchStatus } from "../enums";

export interface CharaterInitialStateType {
  status: FetchStatus;
  pages: number;
  charaters: SingleCharaterCardProps[];
  singleCharater: SingleInformationCardProps | {};
  charatersFavorite: SingleCharaterCardProps[] | [];
}

export interface SingleCharaterCardProps {
  image: string;
  name: string;
  location: string;
  gender: string;
  id: number;
}

export interface SingleInformationCardProps {
  image: string;
  name: string;
  location: string;
  gender: string;
  origin: string;
  species: string;
  status: string;
  id?: number;
}

export interface charaterProps {
  id?: number;
  name: string;
  location: { name: string };
  gender: string;
  image: string;
}

export interface PropsInfoCard {
  id?: number;
  name: string;
  location: string;
  gender: string;
  image: string;
  origin: string;
  species: string;
  status: string;
}

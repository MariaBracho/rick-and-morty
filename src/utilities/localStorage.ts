import { SingleCharaterCardProps } from "@/types/models/charaters";

export const persistLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const getLocalCharacterStorage = ({
  key,
}: {
  key: string;
}): SingleCharaterCardProps[] | [] => {
  return JSON.parse(localStorage.getItem(key) as string) as [];
};

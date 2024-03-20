import { SingleCharaterCardProps } from "@/types/models/characters";

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
  const data = localStorage.getItem(key) ?? "null";
  return JSON.parse(data) ?? [];
};

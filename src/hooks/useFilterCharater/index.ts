import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchCharaterGroupFilters } from "@/redux/charaters/thunk";
import { getPages } from "@/redux/charaters/charaterSlice";

interface FilterProps {
  target: { value: string };
}

export const useFilterCharater = (): {
  filter: ({ target }: FilterProps) => void;
} => {
  const dispatch = useAppDispatch();
  const pages = useAppSelector(getPages);

  const filter = ({ target }: FilterProps): (() => void) => {
    const { value } = target;
    const promise = dispatch(fetchCharaterGroupFilters({ pages, name: value }));
    return (): void => {
      promise.abort();
    };
  };

  return { filter };
};

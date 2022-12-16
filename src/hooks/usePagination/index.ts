import { useAppDispatch } from "../useAppDispatch";
import { useAppSelector } from "../useAppSelector";
import {
  nextPage,
  previouspage,
  getPages,
} from "@/redux/charaters/charaterSlice";
import { useEffect, useState } from "react";

interface returnPagination {
  handledNextPage: () => void;
  handledPreviousPage: () => void;
  isMinPage: boolean;
  isMaxPage: boolean;
}

interface paginationProps {
  minPage?: number;
  maxPage?: number;
}

export default function usePagination({
  minPage = 0,
  maxPage = 20,
}: paginationProps): returnPagination {
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPages);
  const [isMinPage, setIsMinPage] = useState(false);
  const [isMaxPage, setIsMaxPage] = useState(false);

  const handledNextPage = (): void => {
    dispatch(nextPage());
  };
  const handledPreviousPage = (): void => {
    dispatch(previouspage());
  };
  useEffect(() => {
    const isMin = page === minPage;
    const isMax = page === maxPage;
    if (isMin) {
      setIsMinPage(true);
      setIsMaxPage(false);
    }
    if (isMax) {
      setIsMinPage(false);
      setIsMaxPage(true);
    } else {
      setIsMinPage(false);
      setIsMaxPage(false);
    }
  }, [page]);
  return { handledNextPage, handledPreviousPage, isMinPage, isMaxPage };
}

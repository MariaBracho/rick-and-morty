import { componentType } from "@/types/generalTypes";
import usePagination from "@/hooks/usePagination";

export default function Pagination(): componentType {
  const { handledNextPage, handledPreviousPage, isMinPage } = usePagination({
    minPage: 0,
    maxPage: 10,
  });

  const NEXT_PAGE = "Next";
  const PREVIOUS_PAGE = "Previous page";

  return (
    <div className="btn-group grid grid-cols-2 mt-8">
      <button
        className="btn btn-outline"
        disabled={isMinPage}
        onClick={handledPreviousPage}
      >
        {PREVIOUS_PAGE}
      </button>
      <button className="btn btn-outline" onClick={handledNextPage}>
        {NEXT_PAGE}
      </button>
    </div>
  );
}

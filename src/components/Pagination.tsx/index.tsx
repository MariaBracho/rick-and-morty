import { componentType } from "@/types/generalTypes";
import usePagination from "@/hooks/usePagination";

export default function Pagination(): componentType {
  const { handledNextPage, handledPreviousPage, isMinPage } = usePagination({
    minPage: 0,
    maxPage: 10,
  });

  return (
    <div className="btn-group grid grid-cols-2 mt-8">
      <button
        className="btn btn-outline"
        disabled={isMinPage}
        onClick={handledPreviousPage}
      >
        Previous page
      </button>
      <button className="btn btn-outline" onClick={handledNextPage}>
        Next
      </button>
    </div>
  );
}

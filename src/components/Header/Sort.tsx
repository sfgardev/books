import { useSelector } from "react-redux";
import { selectBooksState } from "../../store/slices/selectors";
import { useAppDispatch } from "../../store/store";
import {
  fetchBooks,
  updateOrderBy,
  updateStartIndex,
} from "../../store/slices/booksSlice";
import { GetBooksParams } from "../../api/books/types";

export default function Sort() {
  const { searchQuery, maxResults, orderBy } = useSelector(selectBooksState);
  const dispatch = useAppDispatch();

  function handleChangeSort(event: React.ChangeEvent<HTMLSelectElement>) {
    if (!searchQuery) return;
    const value = event.target.value as GetBooksParams["orderBy"];

    dispatch(
      fetchBooks({
        q: searchQuery,
        maxResults,
        orderBy: value,
        startIndex: 0,
      })
    );
    dispatch(updateOrderBy(value));
    dispatch(updateStartIndex(0));
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <label htmlFor="sort" className="text-xl">
        Sorting by
      </label>
      <select
        id="sort"
        value={orderBy}
        onChange={handleChangeSort}
        className="text-slate-500 p-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

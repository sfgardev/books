import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchBooks,
  updateSearchQuery,
  updateStartIndex,
} from "../../store/slices/booksSlice";
import {
  selectBooksOrderBy,
  selectBooksState,
} from "../../store/slices/selectors";
import { useAppDispatch } from "../../store/store";
import SearchIcon from "../../icons/SearchIcon";

export default function Search() {
  const dispatch = useAppDispatch();
  const { status, searchQuery, maxResults } = useSelector(selectBooksState);
  const orderBy = useSelector(selectBooksOrderBy);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isButtonDisabled = !searchQuery || status === "pending";

  function handleSearchBooks(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newStartIndex = 0;
    dispatch(
      fetchBooks({
        q: searchQuery,
        maxResults,
        orderBy,
        startIndex: newStartIndex,
      })
    );
    dispatch(updateStartIndex(newStartIndex));

    if (pathname !== "/") {
      navigate("/");
    }
  }

  return (
    <form
      onSubmit={handleSearchBooks}
      className="relative flex items-center gap-2 sm:col-span-2 w-full sm:w-1/2 m-auto"
    >
      <input
        value={searchQuery}
        onChange={(event) => dispatch(updateSearchQuery(event.target.value))}
        type="text"
        className="w-full p-2 pr-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
        placeholder="Enter book..."
      />
      <button
        disabled={isButtonDisabled}
        className="absolute right-0 top-0 bottom-0 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

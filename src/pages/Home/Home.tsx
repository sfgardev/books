import { useMemo } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/ui/Loader";
import { fetchBooks, updateStartIndex } from "../../store/slices/booksSlice";
import { selectBooksState } from "../../store/slices/selectors";
import { useAppDispatch } from "../../store/store";
import BookCard from "./BookCard";

export default function Home() {
  const {
    items: books,
    totalItems,
    status,
    category,
    maxResults,
    startIndex,
    searchQuery,
    orderBy,
  } = useSelector(selectBooksState);

  const dispatch = useAppDispatch();

  const isLoadMoreVisible =
    status === "succeeded" &&
    totalItems > (startIndex || maxResults || 0) &&
    category === "All";

  const filteredBooks = useMemo(() => {
    if (category === "All") return books;

    return books.filter((book) =>
      book.volumeInfo.categories?.includes(category)
    );
  }, [category, books]);

  const totalItemsCount =
    category === "All" ? totalItems : filteredBooks.length;

  function handleLoadMore() {
    const newStartIndex = (startIndex ?? 0) + 30;
    dispatch(
      fetchBooks({
        q: searchQuery,
        maxResults,
        orderBy,
        startIndex: newStartIndex,
      })
    );
    dispatch(updateStartIndex(newStartIndex));
  }

  if (status === "pending" && startIndex === 0) return <Loader />;

  return (
    <>
      <main className="px-4 pt-10">
        {status === "idle" && (
          <h2 className="text-2xl text-center">
            Start typing for searching books
          </h2>
        )}
        {status !== "idle" && (
          <h2 className="text-center text-2xl mb-6">
            Found {totalItemsCount} results
          </h2>
        )}
        <section className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={`${book.id}-${book.etag}`} book={book} />
            ))}
          </div>

          {isLoadMoreVisible && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-slate-400 text-white rounded transition hover:bg-slate-600"
              >
                Load more
              </button>
            </div>
          )}
          {status === "pending" && (startIndex || 0) > 0 && <Loader />}
        </section>
      </main>
    </>
  );
}

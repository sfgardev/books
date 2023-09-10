import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchBookById } from "../store/slices/bookByIdSlice";
import { useSelector } from "react-redux";
import { selectBookByIdState } from "../store/slices/selectors";
import Loader from "../components/ui/Loader";

export default function BookDetails() {
  const { bookId } = useParams();
  const { item: book, status } = useSelector(selectBookByIdState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!bookId) return;
    dispatch(fetchBookById(bookId));
  }, [dispatch, bookId]);

  if (status === "pending") return <Loader />;

  return (
    <main className="px-4 pt-10">
      <section className="pb-10">
        <article className="sm:flex sm:items-start sm:gap-6 ">
          <div className="px-12 py-8 bg-gray-300 flex justify-center">
            <img src={book?.imageLinks?.smallThumbnail} alt={book?.title} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-600">{book?.categories ? book?.categories.join(", ") : "---"}</p>
            <h3 className="text-3xl ">{book?.title}</h3>
            <p className="text-gray-600">{book?.authors ? book?.authors.join(", ") : "---"}</p>
            <p>{book?.subtitle ? book?.subtitle : "---"}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

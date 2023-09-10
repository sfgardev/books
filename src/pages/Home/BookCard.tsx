import { Link } from "react-router-dom";
import { BookModel } from "../../api/books/types";
import React from "react";

type BookCardProps = {
  book: BookModel;
};

function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to={`/${book.id}`}
      className="bg-gray-300 px-4 py-6 flex flex-col gap-8 rounded shadow-md"
    >
      <div className="flex justify-center">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="h-40"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg text-gray-600">
          {book.volumeInfo.categories ? book.volumeInfo.categories[0] : "---"}
        </p>
        <h2 className="text-xl">{book.volumeInfo.title}</h2>
        <p className="text-gray-600">
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "---"}
        </p>
      </div>
    </Link>
  );
}

const MemoizedBookCard = React.memo(BookCard);

export default MemoizedBookCard;

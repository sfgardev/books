import React from "react";
import { useAppDispatch } from "../../store/store";
import { updateCategory } from "../../store/slices/booksSlice";
import { useSelector } from "react-redux";
import { selectBooksCategory } from "../../store/slices/selectors";

const categories = [
  "All",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];

export default function Filter() {
  const dispatch = useAppDispatch();
  const category = useSelector(selectBooksCategory);

  function handleFilterByCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(updateCategory(event.target.value));
  }

  return (
    <div className="flex items-center gap-2 flex-wrap sm:justify-self-end">
      <label htmlFor="categories" className="text-xl">
        Categories
      </label>
      <select
        id="categories"
        value={category}
        onChange={handleFilterByCategory}
        className="text-slate-500 p-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

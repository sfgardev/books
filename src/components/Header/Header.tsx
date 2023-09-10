import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";

export default function Header() {
  return (
    <header className=" px-4 py-6 bg-gradient-to-b from-gray-500">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Search for books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-stretch gap-4">
        <Search />
        <Filter />
        <Sort />
      </div>
    </header>
  );
}

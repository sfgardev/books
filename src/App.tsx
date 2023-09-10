import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:bookId" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;

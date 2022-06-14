import { Route, Routes } from "react-router-dom";
import { Homepage, NotFoundPage, SingleBook } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/book/:bookId" element={<SingleBook />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

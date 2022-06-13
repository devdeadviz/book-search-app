import { Route, Routes } from "react-router-dom";
import { Homepage, SingleBook } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/book/:bookId" element={<SingleBook />} />
    </Routes>
  );
};

export default App;

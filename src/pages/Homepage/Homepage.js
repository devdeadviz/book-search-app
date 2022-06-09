import { Search } from "../../components";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <h1>Book Search App</h1>
      <Search />
    </div>
  );
};

export { Homepage };

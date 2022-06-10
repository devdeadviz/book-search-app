import axios from "axios";

const getVolumes = async (keyword) => {
  try {
    const data = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=AIzaSyCB9PJwAtu0cslP4CTeVqh3r2vTqgVwcco`
    );
    console.log("API data", data);
  } catch (error) {
    console.error(error);
  }
};

export { getVolumes };

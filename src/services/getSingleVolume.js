import axios from "axios";

const getSingleVolume = async (bookId) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyCB9PJwAtu0cslP4CTeVqh3r2vTqgVwcco`
    );
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export { getSingleVolume };

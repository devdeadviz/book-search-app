import axios from "axios";

const getSingleVolume = async (bookId) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export { getSingleVolume };

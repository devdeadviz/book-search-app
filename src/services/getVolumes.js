import axios from "axios";

const getVolumes = async (keyword) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40&key=${process.env.REACT_APP_API_KEY}`
    );
    return data.items;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export { getVolumes };

import axios from "axios";

const getVolumes = async (keyword) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40&key=AIzaSyCB9PJwAtu0cslP4CTeVqh3r2vTqgVwcco`
    );
    console.log(data)
    return data.items;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export { getVolumes };

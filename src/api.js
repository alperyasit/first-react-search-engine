import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID InqePbOVZbq02dqNsJNRKz5pAnmLnmin-idHSh34S8M",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;

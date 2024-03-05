import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";

const MoviesOpenPage = () => {
  const params = useParams();
  const [moviesOpen, setOpenMovie] = useState([]);
  console.log(moviesOpen);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: "67b950c76555ffb6628f502a1eb9921a",
          id: params.id,
        },
      });
      setOpenMovie(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <p>MoviesOpenPage:{params.id}</p>
    </div>
  );
};

export default MoviesOpenPage;

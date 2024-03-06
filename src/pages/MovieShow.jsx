import Hero from "../components/Hero.jsx";
import Fade from "../components/Fade.jsx";
import Movies from "../components/Movies.jsx";
import Shows from "../components/Shows.jsx";
// import axios from "axios";
// import { BASE_URL } from "../constants/constanst";
// import { useEffect, useState } from "react";

const MovieShow = () => {
  // const [movies, setMovie] = useState([]);
  // console.log(movies);
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/movie/popular`, {
  //       params: {
  //         api_key: "67b950c76555ffb6628f502a1eb9921a",
  //         include_video: true,
  //       },
  //     })
  //     .then(function (res) {
  //       setMovie(res.data.results);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {});
  // }, []);
  return (
    <>
      <Hero />
      <div className="mb-[100px] sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
        <Movies />
        {/* <div className="grid grid-cols-4 gap-3">
          {movies.map((movie) => (
            <div
              className="rounded-lg border border-[text-[#999999]] px-4 py-3"
              key={movie.id}
            >
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt="img"
                className="mb-4"
              />
              <h4 className="mb-4">{movie.original_title}</h4>
              <span>{movie.release_date}</span>
            </div>
          ))}
        </div> */}
        <Shows />
      </div>
      <Fade />
    </>
  );
};

export default MovieShow;

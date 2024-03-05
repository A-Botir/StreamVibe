import Hero from "../components/Hero.jsx";
import Fade from "../components/Fade.jsx";
import Movies from "../components/Movies.jsx";
import Shows from "../components/Shows.jsx";
import axios from "axios";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";

const MovieShow = () => {
  return (
    <>
      <Hero />
      <div className="mb-[100px] sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
        <Movies />
        {/* <div className="grid grid-cols-4 gap-3">
          {movies.map((movie) => (
            <NavLink to={movie.id} key={movie.id}>
              <div className="px-4 py-3">
                <h4>{movie.original_title}</h4>
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt="img"
                />
              </div>
            </NavLink>
          ))}
        </div> */}
        <Shows />
      </div>
      <Fade />
    </>
  );
};

export default MovieShow;

import Hero from "../components/Hero.jsx";
import Fade from "../components/Fade.jsx";
import Movies from "../components/Movies.jsx";
import Shows from "../components/Shows.jsx";
// import axios from "axios";
// import { BASE_URL } from "../constants/constanst";
// import { useEffect, useState } from "react";

const MovieShow = ({ searchMovies }) => {
  console.log(searchMovies);
  return (
    <>
      <Hero />
      <div className="mb-[100px] sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
        <div className="mb-20 grid grid-cols-5 gap-2 sm:mb-[50px] sm:grid-cols-2 lg:mb-[90px] xl:mb-[115px]">
          {searchMovies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
            >
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt="movie img"
                className="mb-2 rounded-[10px]"
              />
              <p className="rounded-2xl bg-[#141414] px-[10px] py-[6px] text-center text-[12px] leading-[12px] text-[#BFBFBF] sm:px-2 lg:px-[14px]">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
        <Movies />
        <Shows />
      </div>
      <Fade />
    </>
  );
};

export default MovieShow;

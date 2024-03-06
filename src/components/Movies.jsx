import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [trends, setTrending] = useState([]);
  const [mygenres, setMovieGenres] = useState([]);
  const [popular, setPopular] = useState([]);
  console.log(popular);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesResponse, trendingResponse, genresResponse, mostPopular] =
          await Promise.all([
            axios.get(`${BASE_URL}/movie/now_playing`, {
              params: {
                api_key: "67b950c76555ffb6628f502a1eb9921a",
              },
            }),
            axios.get(`${BASE_URL}/trending/movie/week`, {
              params: {
                api_key: "67b950c76555ffb6628f502a1eb9921a",
              },
            }),
            axios.get(`${BASE_URL}/genre/movie/list`, {
              params: {
                api_key: "67b950c76555ffb6628f502a1eb9921a",
              },
            }),
            axios.get(`${BASE_URL}/movie/popular`, {
              params: {
                api_key: "67b950c76555ffb6628f502a1eb9921a",
              },
            }),
          ]);

        setMovies(moviesResponse.data.results);
        setTrending(trendingResponse.data.results);
        setMovieGenres(genresResponse.data.genres);
        setPopular(mostPopular.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <section className="mb-[100px] rounded-xl border border-[#262626] p-8 sm:mb-[80mb] sm:border-none sm:p-0 lg:p-10 xl:mb-[120px] xl:p-[50px]">
      <div className="mb-20 sm:mb-[50px] lg:mb-[90px] xl:mb-[115px]">
        <h2 className="sm:text-6 mb-10 text-[28px] font-bold sm:mb-8 lg:mb-[50px] lg:text-[30px] xl:mb-[80px] xl:text-[38px]">
          Popular Top 10 In Genres
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {mygenres.slice(4, 13).map((mygenre) => (
            <SwiperSlide>
              <div
                key={mygenre.id}
                className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
              >
                <img
                  src="https://picsum.photos/200/250?random=1"
                  alt="genres img"
                  className="mb-2 rounded-[10px]"
                />
                <p className="text-[14px]">{mygenre.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-20 sm:mb-[50px] lg:mb-[90px] xl:mb-[115px]">
        <h2 className="sm:text-6 mb-10 text-[28px] font-bold sm:mb-8 lg:mb-[50px] lg:text-[30px] xl:mb-[80px] xl:text-[38px]">
          Trending Now
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {trends.map((trend) => (
            <SwiperSlide>
              <div
                key={trend.id}
                className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${trend.poster_path}`}
                  alt="movie img"
                  className="mb-2 rounded-[10px]"
                />
                <div className="flex w-full items-center justify-between">
                  <p className="rounded-xl bg-green-600 px-2 text-[14px]">
                    {trend.vote_average.toFixed(1)}
                  </p>
                  <p className="rounded-xl bg-[red] px-2 text-[14px]">
                    {trend.original_language}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-20 sm:mb-[50px] lg:mb-[90px] xl:mb-[115px]">
        <h2 className="sm:text-6 mb-10 text-[28px] font-bold sm:mb-8 lg:mb-[50px] lg:text-[30px] xl:mb-[80px] xl:text-[38px]">
          New Releases
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {movies.map((movie) => (
            <SwiperSlide>
              <div
                key={movie.id}
                className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt="movie img"
                  className="mb-2 rounded-[10px]"
                />
                <p className="rounded-2xl bg-[#141414] px-[10px] py-[6px] text-center text-[12px] leading-[12px] text-[#BFBFBF] sm:px-2 lg:px-[14px]">{`Released at ${movie.release_date}`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h2 className="sm:text-6 mb-10 text-[28px] font-bold sm:mb-8 lg:mb-[50px] lg:text-[30px] xl:mb-[80px] xl:text-[38px]">
          Must - Watch Movies
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {popular.map((pop) => (
            <SwiperSlide>
              <div
                key={pop.id}
                className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${pop.poster_path}`}
                  alt="movie img"
                  className="mb-2 rounded-[10px]"
                />
                <p className="rounded-2xl bg-[#141414] px-[10px] py-[6px] text-center text-[12px] leading-[12px] text-[#BFBFBF] sm:px-2 lg:px-[14px]">{`Released at ${pop.title}`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Movies;

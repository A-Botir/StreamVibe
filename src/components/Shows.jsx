import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Shows = () => {
  const [shows, setShow] = useState([]);
  const [trendshows, setTrendShows] = useState([]);
  const [tvgenre, setTvGenre] = useState([]);
  const [tvpopular, setTvPopular] = useState([]);
  console.log(tvpopular);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          showResponse,
          showtrendingResponse,
          showgenresResponse,
          populartvshow,
        ] = await Promise.all([
          axios.get(`${BASE_URL}/tv/airing_today`, {
            params: {
              api_key: "67b950c76555ffb6628f502a1eb9921a",
            },
          }),
          axios.get(`${BASE_URL}/trending/tv/week`, {
            params: {
              api_key: "67b950c76555ffb6628f502a1eb9921a",
            },
          }),
          axios.get(`${BASE_URL}/genre/tv/list`, {
            params: {
              api_key: "67b950c76555ffb6628f502a1eb9921a",
            },
          }),
          axios.get(`${BASE_URL}/tv/popular`, {
            params: {
              api_key: "67b950c76555ffb6628f502a1eb9921a",
            },
          }),
        ]);
        setShow(showResponse.data.results);
        setTrendShows(showtrendingResponse.data.results);
        setTvGenre(showgenresResponse.data.genres);
        setTvPopular(populartvshow.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <section className="rounded-xl border border-[#262626] p-8 sm:border-none sm:p-0 lg:p-10 xl:p-[50px]">
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
          {tvgenre.slice(4, 13).map((mygenre) => (
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
          Trending Shows Now
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
          {trendshows.map((trend) => (
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
          New Released Shows
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
          {shows.map((show) => (
            <SwiperSlide>
              <div
                key={show.id}
                className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-4 sm:p-3 xl:rounded-xl xl:p-5"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${show.poster_path}`}
                  alt="movie img"
                  className="mb-2 rounded-[10px]"
                />
                <p className="rounded-2xl bg-[#141414] px-[10px] py-[6px] text-center text-[12px] leading-[12px] text-[#BFBFBF] sm:px-2 lg:px-[14px]">{`Released at ${show.first_air_date}`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h2 className="sm:text-6 mb-10 text-[28px] font-bold sm:mb-8 lg:mb-[50px] lg:text-[30px] xl:mb-[80px] xl:text-[38px]">
          Must - Watch Shows
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
          {tvpopular.map((pop) => (
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
                <p className="rounded-2xl bg-[#141414] px-[10px] py-[6px] text-center text-[12px] leading-[12px] text-[#BFBFBF] sm:px-2 lg:px-[14px]">{`Released at ${pop.name}`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Shows;

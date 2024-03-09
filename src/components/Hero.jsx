import Play from "../images/icon/hero/play_icon.svg";
import Plus from "../images/icon/main/plus.svg";
import Volume from "../images/icon/hero/volume_icon.svg";
import Like from "../images/icon/hero/like_icon.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  const [movies, setMovie] = useState([]);
  console.log(movies);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: "67b950c76555ffb6628f502a1eb9921a",
          include_video: true,
        },
      })
      .then(function (res) {
        setMovie(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {movies.slice(5, 14).map((movie) => (
        <SwiperSlide>
          <section
            className={`relative mb-[90px] rounded-xl pb-4 pt-[335px] sm:mb-[80px] sm:pt-[276px] lg:mb-[100px] lg:pt-[434px] xl:mb-[180px] xl:pb-5 xl:pt-[504px]`}
            key={movie.id}
          >
            <img
              src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
              alt="backdrop"
              className="absolute left-0 top-0 z-[-2] h-full w-full rounded-xl"
            />
            <div className="mx-auto w-[75%]">
              <h2 className="text-6 mb-3 text-center font-bold lg:text-[30px] xl:text-[38px]">
                {movie.title}
              </h2>
              <p className="lg:text-4 text-center text-[14px] font-medium text-[#999999] sm:hidden xl:text-[18px]">
                {movie.overview}
              </p>
              <div className="mt-[22px] flex items-center justify-center gap-5 sm:mt-5 sm:flex-col lg:mt-6 xl:mt-[30px]">
                <button className="sm:py-{18px} flex rounded-lg bg-[#E60000] px-[26px] py-5 text-[14px] font-semibold lg:py-[18px] xl:px-[27px] xl:py-[22px] xl:text-[18px]">
                  <img
                    src={Play}
                    alt="play icon"
                    className="mr-2 h-6 w-6 hover:opacity-80 xl:h-7 xl:w-7"
                  />
                  Play Now
                </button>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
                    <img src={Plus} alt="plus icon" />
                  </button>
                  <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
                    <img src={Like} alt="like icon" />
                  </button>
                  <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
                    <img src={Volume} alt="volume icon" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

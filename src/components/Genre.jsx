import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Right from "../images/icon/hero/right_arrow.svg";
import { BASE_URL } from "../constants/constanst";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
          params: {
            api_key: "67b950c76555ffb6628f502a1eb9921a",
          },
        });
        if (response.status !== 200)
          throw new Error("Could not get genre movie list");
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, []);

  return (
    <section className="mb-90px sm:mb-[50px] lg:mb-[120px] xl:mb-[150px]">
      <div className="mb-12 flex items-center justify-between sm:mb-10 lg:mb-[60px]  xl:mb-[80px]">
        <div>
          <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
            Explore our wide variety of categories
          </h2>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {genres.map((genre) => (
          <SwiperSlide>
            <div
              className="mx-3 rounded-[10px] bg-[#262626] p-[30px] sm:p-5 lg:p-6 xl:rounded-xl xl:p-[30px]"
              key={genre.id}
            >
              <img
                src="https://picsum.photos/200/250?random=2"
                alt="img"
                className="rounded-lg"
              />
              <div className="mt-2 flex items-center justify-between">
                <p className="text-[14px] font-semibold lg:text-[16px] xl:text-[18px]">
                  {genre.name}
                </p>
                <button className="h-[22px] w-[22px] sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-[30px] xl:w-[30px]">
                  <img src={Right} alt="right icon" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6 hidden h-[2px] w-[81px] bg-[#333333] sm:block"></div>
    </section>
  );
};

export default Genre;

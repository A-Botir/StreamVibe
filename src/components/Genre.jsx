import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from "../images/icon/hero/left_arrow.svg";
import Right from "../images/icon/hero/right_arrow.svg";
import { BASE_URL } from "../constants/constanst";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const sliderRef = useRef(null);

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

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <Slider ref={sliderRef} {...settings}>
        {genres.map((genre) => (
          <div
            className="mx-3 rounded-[10px] bg-[#262626] p-[30px] sm:p-5 lg:p-6 xl:rounded-xl xl:p-[30px]"
            key={genre.id}
          >
            <div className="grid grid-cols-2 gap-[5px]"></div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-semibold lg:text-[16px] xl:text-[18px]">
                {genre.name}
              </p>
              <button className="h-[22px] w-[22px] sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-[30px] xl:w-[30px]">
                <img src={Right} alt="right icon" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-6 hidden h-[2px] w-[81px] bg-[#333333] sm:block"></div>
    </section>
  );
};

export default Genre;

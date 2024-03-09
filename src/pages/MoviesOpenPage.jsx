import axios from "axios";
import { BASE_URL } from "../constants/constanst";
import { useEffect, useState } from "react";
import { useParams, NavLink, Route, Routes } from "react-router-dom";
import SingleHiro from "../components/SingleHiro";
import Fade from "../components/Fade";
import Star from "../images/icon/single/star.svg";
import Translate from "../images/icon/single/translate.svg";
import View from "../images/icon/single/view.svg";
import Half from "../images/icon/single/halfstar.svg";
import Date from "../images/icon/single/data.svg";
import IntStar from "../images/icon/single/intstar.svg";
import Nullstar from "../images/icon/single/nullstar.svg";
import Right from "../images/icon/hero/right_arrow.svg";
import Left from "../images/icon/hero/left_arrow.svg";

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
      <SingleHiro />
      <div className="mb-[100px] grid grid-cols-3 gap-5 sm:mb-[80px] sm:grid-cols-1 lg:mb-[120px] xl:mb-[150px]">
        <div className="col-span-2">
          <div className="mb-5 rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:mb-[30px] xl:rounded-lg xl:p-[50px]">
            <h4 className="mb-[10px] text-[16px] font-medium leading-8 text-[#999999] sm:mb-2 sm:text-[14px] xl:mb-3 xl:text-[18px]">
              Description
            </h4>
            <p className="text-[16px] font-medium sm:text-[14px] xl:text-[18px]  ">
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </p>
          </div>
          <div className="mb-5 rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:mb-[30px] xl:rounded-lg xl:p-[50px]">
            <div className=" mb-5 flex  items-center justify-between sm:mb-4 xl:mb-[30px]">
              <h3 className="mb-[10px] text-[16px] font-medium leading-8 text-[#999999] sm:mb-2 sm:text-[14px] xl:mb-3 xl:text-[18px]">
                Cast
              </h3>
              {/* button left vs right */}
              <div className="flex items-center gap-2 xl:gap-[10px] ">
                <button className="rounded-[50%] border border-[#262626] bg-[#0F0F0F] p-3 xl:p-[14px]">
                  <img src={Left} alt="left" />
                </button>
                <button className="rounded-[50%] border border-[#262626] bg-[#0F0F0F] p-3 xl:p-[14px]">
                  <img src={Right} alt="right" />
                </button>
              </div>
            </div>
            {/* categories movies */}
            <div className="grid grid-cols-8 gap-5 sm:grid-cols-4">
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
              <div className="h-[89px] w-[87px] rounded-[10px] bg-[#262626] sm:h-[75px] sm:w-[70px]  xl:h-[102px] xl:w-[100px] xl:rounded-xl"></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5 rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:rounded-lg xl:p-[50px]">
            <div className=" flex w-full items-center  justify-between">
              <h4 className="text-[16px] font-medium leading-8 text-[#999999] sm:text-[14px] xl:text-[18px]">
                Reviews
              </h4>
              <button className="flex items-center justify-center rounded-md bg-[#141414] p-3 text-[14px]  font-medium xl:rounded-lg xl:px-4 xl:py-[14px] xl:text-[18px]">
                <span className=" pr-3 text-[27px]">+</span> Add Your Review
              </button>
            </div>
            {/* categories movies */}
            <div className="flex gap-4 xl:gap-5">
              <div className="rounded-xl bg-[#0F0F0F] p-6 lg:p-[30px] xl:p-10">
                <div className=" mb-4 flex items-center justify-between xl:mb-5">
                  <span>
                    <h1 className="text-[16px] font-medium lg:text-[18px] xl:text-[20px]">
                      Aniket Roy
                    </h1>
                    <p className="font-mediumlg:text-[16px] text-[#999999 ] text-[14px] xl:text-[18px]">
                      From India
                    </p>
                  </span>
                  <div className="flex justify-start gap-1 rounded-[51px] border border-[#262626] bg-[#141414] px-2 py-1 xl:px-[10px] xl:py-[6px]">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={IntStar}
                        alt={`My Image ${index + 1}`}
                      />
                    ))}
                    <span className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
                      5
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </div>
              <div className="rounded-xl bg-[#0F0F0F] p-6 lg:p-[30px] xl:p-10">
                <div className=" mb-4 flex items-center justify-between xl:mb-5">
                  <span>
                    <h1 className="text-[16px] font-medium lg:text-[18px] xl:text-[20px]">
                      Swaraj
                    </h1>
                    <p className="font-mediumlg:text-[16px] text-[#999999 ] text-[14px] xl:text-[18px]">
                      From India
                    </p>
                  </span>
                  <div className="flex justify-start gap-1 rounded-[51px] border border-[#262626] bg-[#141414] px-2 py-1 xl:px-[10px] xl:py-[6px]">
                    {[...Array(4)].map((_, index) => (
                      <img
                        key={index}
                        src={IntStar}
                        alt={`My Image ${index + 1}`}
                      />
                    ))}
                    {[...Array(1)].map((_, index) => (
                      <img
                        key={index}
                        src={Nullstar}
                        alt={`My Image ${index + 1}`}
                      />
                    ))}
                    <span className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
                      4
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
                  A restless king promises his lands to the local tribals in
                  exchange of a stone (Panjurli, a deity of Keradi Village)
                  wherein he finds solace and peace of mind.
                </p>
              </div>
            </div>
            {/* button right left */}
            <div className="flex items-center justify-between gap-2 xl:gap-[10px]">
              <button className="rounded-[50%] border border-[#262626] bg-[#0F0F0F] p-3 xl:p-[14px]">
                <img src={Left} alt="left" />
              </button>
              <p className="h-1 w-6 rounded-xl bg-[#E60000]"></p>
              <p className="h-1 w-6 rounded-xl bg-[#333333]"></p>
              <p className="h-1 w-6 rounded-xl bg-[#333333]"></p>
              <p className="h-1 w-6 rounded-xl bg-[#333333]"></p>
              <button className="rounded-[50%] border border-[#262626] bg-[#0F0F0F] p-3 xl:p-[14px]">
                <img src={Right} alt="right" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:rounded-lg xl:p-[50px]">
          <div className=" space-y-3">
            <div className="flex items-center gap-2">
              <img src={Date} alt="data" />
              <p className="text-[16px] font-medium text-[#999999] sm:text-[14px] xl:text-[18px]">
                Released Year
              </p>
            </div>
            <p className="text-[17px] text-white">2022</p>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <img src={Translate} alt="lan" className="h-4 w-4 xl:h-5 xl:w-5" />
            <p className=" text-[16px] font-medium text-[#999999] sm:text-[14px] xl:text-[18px]">
              Available Languages
            </p>
          </div>
          <div className=" mb-3 grid grid-cols-3 gap-[10px] text-center">
            <span className=" rounded-lg border border-[#262626] bg-[#141414] px-3 py-[6px] xl:px-[14px] xl:py-2">
              English
            </span>
            <span className=" rounded-lg border border-[#262626] bg-[#141414] px-3 py-[6px] xl:px-[14px] xl:py-2">
              Hindi
            </span>
            <span className=" rounded-lg border border-[#262626] bg-[#141414] px-3 py-[6px] xl:px-[14px] xl:py-2">
              Tamil
            </span>
            <span className=" rounded-lg border border-[#262626] bg-[#141414] px-3 py-[6px] xl:px-[14px] xl:py-2">
              Telegu
            </span>
            <span className=" rounded-lg border border-[#262626] bg-[#141414] px-3 py-[6px] xl:px-[14px] xl:py-2">
              Kannada
            </span>
          </div>
          <div className=" space-y-3">
            <span className="flex items-center gap-2 text-[16px] font-medium text-[#999999]">
              <img src={Star} alt="star" className="h-5 w-5" />
              <p>Ratings</p>
            </span>
            <div className="flex justify-between">
              <div className="rounded-lg border border-[#262626] bg-[#141414] p-[14px] sm:p-3 xl:rounded-[10px] xl:p-4">
                <p className="font-semibold text-[18x] sm:text-[16px] xl:text-[20px]">
                  IMDb
                </p>
                <div className="flex">
                  {[...Array(4)].map((_, index) => (
                    <img
                      key={index}
                      src={IntStar}
                      alt={`My Image ${index + 1}`}
                    />
                  ))}
                  <img src={Half} alt="star" />
                  <span className="font-medium text-[18x] sm:text-[16px] xl:text-[20px]">
                    4.5
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#262626] bg-[#141414] p-[14px] sm:p-3 xl:rounded-[10px] xl:p-4">
                <p className="font-semibold text-[18x] sm:text-[16px] xl:text-[20px]">
                  StreamVibe
                </p>
                <div className="flex">
                  {[...Array(4)].map((_, index) => (
                    <img
                      key={index}
                      src={IntStar}
                      alt={`My Image ${index + 1}`}
                    />
                  ))}
                  <span className="font-medium text-[18x] sm:text-[16px] xl:text-[20px]">
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-3 space-y-3">
            <span className="flex items-center gap-2 text-[16px] font-medium text-[#999999]">
              <img src={View} alt="rectangle" />
              <p>Gernes</p>
            </span>
            <div className="flex gap-5">
              <span className=" rounded-lg bg-black px-[12px] py-[6px] text-white ">
                Action
              </span>
              <span className=" rounded-lg bg-black px-[12px] py-[6px] text-white ">
                Adventure
              </span>
            </div>
          </div>
          <div className=" mt-2 space-y-3">
            <span className="flex items-center gap-2 text-[16px] font-medium text-[#999999]">
              <p>Director</p>
            </span>
            <div className=" flex gap-3 rounded-lg bg-black p-3 text-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdERvQRrqCBuflUAA1EuqX3n7tCzEd0sfsPFTrniUuFIpWk8iqlTs3Wmw&usqp=CAU"
                alt="drama"
                className="h-[50px] w-[47px]"
              />
              <span>
                <h3>Rishab Shetty</h3>
                <p>From India</p>
              </span>
            </div>
          </div>
          <div className=" space-y-3">
            <span className="flex items-center gap-2 text-[16px] font-medium text-[#999999]">
              <p>Music</p>
            </span>
            <div className=" flex gap-3 rounded-lg bg-black p-3 text-white">
              <img
                src="https://cdn-yc-static.i-m-i.ru/store/uploads/profile/122/photo/main-933a75e749d6854aa7e9acecacdd9b1c.jpg"
                alt="drama"
                className="h-[50px] w-[47px]"
              />
              <span>
                <h3>B. Ajaneesh Loknath</h3>
                <p>From India</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Fade />
    </div>
  );
};

export default MoviesOpenPage;

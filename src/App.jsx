import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  MovieShow,
  MoviesOpenPage,
  Subscription,
  Support,
} from "./pages";
import Logo from "./images/icon/header/Logo.svg";
import Bell from "./images/icon/header/Bell.svg";
import Search from "./images/icon/header/Search.svg";
import Burger from "./images/icon/header/burger.svg";
import Facebook from "./images/icon/footer/facebook.svg";
import Inter from "./images/icon/footer/inter.svg";
import Twitter from "./images/icon/footer/twitter.svg";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full bg-[#141414] ${
        location.pathname === "/"
          ? "bg-[url('./images/back/Banner_img.png')] bg-contain bg-no-repeat"
          : ""
      }`}
    >
      <div className="container">
        <header className="flex items-center justify-between py-10 sm:pb-[12px] sm:pt-10 md:gap-5 md:py-[16px] lg:py-[18px] xl:py-[22px]">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo icon"
              className="h-12 w-[132px] sm:h-9 sm:w-[116px] lg:h-12 lg:w-40 xl:h-[60px] xl:w-[200px]"
            />
          </NavLink>
          <ul
            className={`flex justify-center gap-3 rounded-md border border-[#1F1F1F] bg-[#0F0F0F] p-[6px] sm:hidden lg:gap-4 lg:rounded-lg lg:border-2 lg:p-2 xl:gap-[30px] xl:rounded-xl xl:border-4 xl:p-[10px] ${isMenuOpen ? "" : "sm:hidden"}`}
          >
            <li
              className={`rounded-lg py-2 lg:py-3 xl:py-[14px] ${
                location.pathname === "/"
                  ? "bg-[#1A1A1A] px-3 font-medium text-white lg:px-4 xl:px-6"
                  : "text-[#BFBFBF]"
              } cursor-pointer text-[14px] hover:bg-[#141414] hover:font-medium hover:text-white md:text-[12px] xl:text-[18px]`}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`rounded-lg py-2 lg:py-3 xl:py-[14px] ${
                location.pathname === "/movieshow"
                  ? "bg-[#1A1A1A] px-3 font-medium text-white lg:px-4 xl:px-6"
                  : "text-[#BFBFBF]"
              } cursor-pointer text-[14px] hover:bg-[#141414] hover:font-medium hover:text-white md:text-[12px] xl:text-[18px]`}
            >
              <NavLink to="/movieshow">Movie&Shows</NavLink>
            </li>
            <li
              className={`rounded-lg py-2 lg:py-3 xl:py-[14px] ${
                location.pathname === "/support"
                  ? "bg-[#1A1A1A] px-3 font-medium text-white lg:px-4 xl:px-6"
                  : "text-[#BFBFBF]"
              } cursor-pointer text-[14px] hover:bg-[#141414] hover:font-medium hover:text-white md:text-[12px] xl:text-[18px]`}
            >
              <NavLink to="/support">Support</NavLink>
            </li>
            <li
              className={`rounded-lg py-2 lg:py-3 xl:py-[14px] ${
                location.pathname === "/subscriptions"
                  ? "bg-[#1A1A1A] px-3 font-medium text-white lg:px-4 xl:px-6"
                  : "text-[#BFBFBF]"
              } cursor-pointer text-[14px] hover:bg-[#141414] hover:font-medium hover:text-white md:text-[12px] xl:text-[18px]`}
            >
              <NavLink to="/subscriptions">Subscriptions</NavLink>
            </li>
          </ul>
          <div className="flex gap-[14px] sm:hidden">
            {isSearchVisible && (
              <input
                type="search"
                className="rounded-xl border-[#1F1F1F] bg-[#0F0F0F] px-3 py-2 outline-none"
                placeholder="Search..."
              />
            )}
            <button onClick={toggleSearch}>
              <img
                src={Search}
                alt="search icon"
                className="md:h-4 md:w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
              />
            </button>
            <button>
              <img
                src={Bell}
                alt="bell icon"
                className="md:h-4 md:w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
              />
            </button>
          </div>
          <button
            className="hidden h-12 w-12 rounded-md border-[3px] border-[#262626] bg-[#1A1A1A] p-3 sm:block"
            onClick={toggleMenu}
          >
            <img src={Burger} alt="menu icon" />
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieshow" element={<MovieShow />} />
          <Route path="/movieshow/:id" element={<MoviesOpenPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscription />} />
        </Routes>
      </div>
      <div className="footer bg-[#0F0F0F] pb-4 pt-8 sm:pb-5 sm:pt-[50px] lg:pb-10 lg:pt-20 xl:pb-[50px] xl:pt-[100px]">
        <div className="container">
          <footer className=" items-left flex justify-between sm:mb-[50px] md:mb-16 lg:mb-20 xl:mb-[100px]">
            <div className="grid w-full grid-cols-3 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Home
                </h4>
                <ul>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Categories
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Devices
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Pricing
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    FAQ
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Movies
                </h4>
                <ul>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Gernes
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Trending
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    New Release
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Popular
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Shows
                </h4>
                <ul>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Gernes
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Trending
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    New Release
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Popular
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Support
                </h4>
                <ul>
                  <li className="text-[14px] font-medium leading-loose  text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Subscription
                </h4>
                <ul>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Plans
                  </li>
                  <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                    Features
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                  Connect With Us
                </h4>
                <div className="flex gap-[10px]">
                  <img
                    src={Facebook}
                    alt="messenger icon"
                    className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                  />
                  <img
                    src={Twitter}
                    alt="messenger icon"
                    className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                  />
                  <img
                    src={Inter}
                    alt="messenger icon"
                    className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                  />
                </div>
              </div>
            </div>
          </footer>
          <div className="flex items-start justify-between border-t border-[#262626] py-5 text-[14px] sm:flex-col xl:p-6">
            <p className="text-[#999999] sm:mb-5">
              @2023 streamvib, All Rights Reserved
            </p>
            <div className="flex gap-4 text-base sm:gap-3">
              <p className="cursor-pointer border-r border-r-[#262626] pr-4  text-[14px] text-[#999999] sm:pr-3 sm:text-[12px]">
                Terms of Use
              </p>
              <p className="cursor-pointer border-r border-r-[#262626] pr-4  text-[14px] text-[#999999] sm:pr-3 sm:text-[12px]">
                Privacy Policy
              </p>
              <p className="cursor-pointer text-[14px] text-[#999999]  sm:text-[12px]">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// api_key="67b950c76555ffb6628f502a1eb9921a"
// img = https://media.themoviedb.org/t/p/w220_and_h330_face

export default App;

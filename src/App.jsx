import {
  NavLink,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Home,
  MovieShow,
  MoviesOpenPage,
  Subscription,
  Support,
} from "./pages";
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";
import Logo from "./images/icon/header/Logo.svg";
import Bell from "./images/icon/header/Bell.svg";
import Search from "./images/icon/header/Search.svg";
import Burger from "./images/icon/header/burger.svg";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "./constants/constanst";
import axios from "axios";

function App() {
  const location = useLocation();
  const inputField = useRef(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [searchMovies, setSearchMovies] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (query) => {
    setInputValue(query);
    handleSearch(query);
  };

  const handleChangeSearch = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      navigate(`/movieshow?query=${inputValue}`);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: "67b950c76555ffb6628f502a1eb9921a",
          query: inputValue,
        },
      });
      if (response.status !== 200)
        throw new Error("Could not get results movie list");
      setSearchMovies(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

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
      <div className="container sm:relative">
        <header className="flex items-center justify-between py-10 sm:pb-[12px] sm:pt-10 md:gap-5 md:py-[16px] lg:py-[18px] xl:py-[22px]">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo icon"
              className="h-12 w-[132px] sm:h-9 sm:w-[116px] lg:h-12 lg:w-40 xl:h-[60px] xl:w-[200px]"
            />
          </NavLink>
          <ul
            className={`ml-36 flex justify-center gap-3 rounded-md border border-[#1F1F1F] bg-[#0F0F0F] p-[6px] sm:hidden lg:gap-4 lg:rounded-lg lg:border-2 lg:p-2 xl:gap-[30px] xl:rounded-xl xl:border-4 xl:p-[10px] ${isMenuOpen ? "" : "sm:hidden"}`}
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
          <div className="flex w-[296px] justify-end gap-[14px] sm:hidden">
            {isSearchVisible && (
              <input
                type="search"
                className="rounded-xl border-[#1F1F1F] bg-[#0F0F0F] px-3 py-2 outline-none"
                placeholder="Search..."
                id="search"
                ref={inputField}
                onKeyDown={handleKeyDown}
                onChange={handleChangeSearch}
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
        <BurgerMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          location={location}
          handleSearch={handleInputChange}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movieshow"
            element={<MovieShow searchMovies={searchMovies} />}
          />
          <Route path="/movieshow/:id" element={<MoviesOpenPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscription />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

// api_key="67b950c76555ffb6628f502a1eb9921a"
// img = https://media.themoviedb.org/t/p/w220_and_h330_face

export default App;

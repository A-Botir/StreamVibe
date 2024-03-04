import { NavLink, Routes, Route } from "react-router-dom";
import { Home, MovieShow, Subscription, Support } from "./pages";
import Logo from "./images/icon/header/Logo.svg";
import Bell from "./images/icon/header/Bell.svg";
import Search from "./images/icon/header/Search.svg";

function App() {
  return (
    <div className="bg-[#141414] w-full h-screen">
      <header className="flex justify-around items-center pt-[22px]">
        <NavLink to="/">
          <img src={Logo} alt="logo icon" className="w-[200] h-[60px]" />
        </NavLink>
        <ul className="flex justify-center gap-[6px] bg-[#0F0F0F] p-[10px] rounded-xl border-4 border-[#1F1F1F] max-w-[572px]">
          <li className="px-6 py-[14px] rounded-lg text-[#BFBFBF] text-[18px] cursor-pointer hover:text-white hover:font-medium hover:bg-[#141414]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-6 py-[14px] rounded-lg text-[#BFBFBF] text-[18px] cursor-pointer hover:text-white hover:font-medium hover:bg-[#141414]">
            <NavLink to="/movieshow">Movie&Shows</NavLink>
          </li>
          <li className="px-6 py-[14px] rounded-lg text-[#BFBFBF] text-[18px] cursor-pointer hover:text-white hover:font-medium hover:bg-[#141414]">
            <NavLink to="/support">Support</NavLink>
          </li>
          <li className="px-6 py-[14px] rounded-lg text-[#BFBFBF] text-[18px] cursor-pointer hover:text-white hover:font-medium hover:bg-[#141414]">
            <NavLink to="/subscriptions">Subscriptions</NavLink>
          </li>
        </ul>
        <div className="flex gap-[14px]">
          <button>
            <img src={Search} alt="search icon" />
          </button>
          <button>
            <img src={Bell} alt="bell icon" />
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieshow" element={<MovieShow />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </div>
  );
}

// api_key="67b950c76555ffb6628f502a1eb9921a"

export default App;

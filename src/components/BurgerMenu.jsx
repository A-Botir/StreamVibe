import { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ isMenuOpen, toggleMenu, location, handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    handleSearch(query);
  };
  return (
    <div
      className={`hidden ${isMenuOpen ? "sm:block" : "hidden"} absolute right-8 top-[100px] z-[4] w-[85%]`}
    >
      <div className="w- flex flex-col items-center rounded-xl bg-[#1F1F1F] p-3">
        <input
          type="search"
          className="mb-2 rounded-xl border-[#1F1F1F] bg-[#0F0F0F] px-3 py-2 outline-none"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <ul className="flex flex-col items-center gap-3">
          <li
            className={`py-2 ${location.pathname === "/" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} mx-4 w-full cursor-pointer rounded-lg text-center hover:bg-[#141414] hover:text-white`}
          >
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li
            className={`py-2 ${location.pathname === "/movieshow" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} mx-4 w-full cursor-pointer rounded-lg text-center hover:bg-[#141414] hover:text-white`}
          >
            <NavLink to="/movieshow" onClick={toggleMenu}>
              Movie&Shows
            </NavLink>
          </li>
          <li
            className={`py-2 ${location.pathname === "/support" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} mx-4 w-full cursor-pointer rounded-lg text-center hover:bg-[#141414] hover:text-white`}
          >
            <NavLink to="/support" onClick={toggleMenu}>
              Support
            </NavLink>
          </li>
          <li
            className={`py-2 ${location.pathname === "/subscriptions" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} mx-4 w-full cursor-pointer rounded-lg text-center hover:bg-[#141414] hover:text-white`}
          >
            <NavLink to="/subscriptions" onClick={toggleMenu}>
              Subscriptions
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

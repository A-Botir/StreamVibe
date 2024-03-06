import { NavLink } from "react-router-dom";

const BurgerMenu = ({ isMenuOpen, toggleMenu, location, isSearchVisible }) => {
  return (
    <div className={`hidden ${isMenuOpen ? "sm:block" : "hidden"}`}>
      <input
        type="search"
        className="rounded-xl border-[#1F1F1F] bg-[#0F0F0F] px-3 py-2 outline-none"
        placeholder="Search..."
      />
      <ul className="flex flex-col items-center gap-3">
        <li
          className={`py-2 ${location.pathname === "/" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} cursor-pointer hover:bg-[#141414] hover:text-white`}
        >
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li
          className={`py-2 ${location.pathname === "/movieshow" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} cursor-pointer hover:bg-[#141414] hover:text-white`}
        >
          <NavLink to="/movieshow" onClick={toggleMenu}>
            Movie&Shows
          </NavLink>
        </li>
        <li
          className={`py-2 ${location.pathname === "/support" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} cursor-pointer hover:bg-[#141414] hover:text-white`}
        >
          <NavLink to="/support" onClick={toggleMenu}>
            Support
          </NavLink>
        </li>
        <li
          className={`py-2 ${location.pathname === "/subscriptions" ? "bg-[#1A1A1A] text-white" : "text-[#BFBFBF]"} cursor-pointer hover:bg-[#141414] hover:text-white`}
        >
          <NavLink to="/subscriptions" onClick={toggleMenu}>
            Subscriptions
          </NavLink>
        </li>
      </ul>
      {isSearchVisible && (
        <input
          type="search"
          className="my-3 rounded-xl border-[#1F1F1F] bg-[#0F0F0F] px-3 py-2 outline-none"
          placeholder="Search..."
        />
      )}
    </div>
  );
};

export default BurgerMenu;

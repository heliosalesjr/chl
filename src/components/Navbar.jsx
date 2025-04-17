import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/toggle"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        useToggle
      </NavLink>
      <NavLink
        to="/localstorage"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        useLocalStorage
      </NavLink>
      <NavLink
        to="/previousexample"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }
      >
        usePrevious
      </NavLink>
    </nav>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:my-12 px-0 mt-4 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-l-4 border-customPrimaryGreen font-semibold text-customPrimaryGreen duration-200"
                  : "duration-200"
              }
            >
              <li className="md:text-lg px-2 py-1 text-base">Home</li>
            </NavLink>

            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "border-l-4 border-customPrimaryGreen font-semibold text-customPrimaryGreen duration-200"
                  : "duration-200"
              }
            >
              <li className="md:text-lg px-2 py-1 text-base">Listed Books</li>
            </NavLink>

            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive
                  ? "border-l-4 border-customPrimaryGreen font-semibold text-customPrimaryGreen duration-200"
                  : "duration-200"
              }
            >
              <li className="md:text-lg px-2 py-1 text-base">Pages to Read</li>
            </NavLink>
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost lg:px-0 md:text-3xl text-xl font-bold"
        >
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center lg:flex hidden">
        <ul className="menu menu-horizontal gap-4 p-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " flex items-center border rounded-lg duration-300 border-customPrimaryGreen font-semibold text text-customPrimaryGreen"
                : " flex items-center text-customGray08 border  border-transparent hover:bg-gray-200 rounded-lg duration-300"
            }
          >
            <li className="md:text-lg px-5 py-4 text-base text-center">Home</li>
          </NavLink>

          <NavLink
            to="/listedBooks"
            className={({ isActive }) =>
              isActive
                ? " flex items-center border rounded-lg duration-300 border-customPrimaryGreen font-semibold text text-customPrimaryGreen"
                : " flex items-center text-customGray08 border  border-transparent hover:bg-gray-200 rounded-lg duration-300"
            }
          >
            <li className="md:text-lg px-5 py-4 text-base">Listed Books</li>
          </NavLink>

          <NavLink
            to="/pagesToRead"
            className={({ isActive }) =>
              isActive
                ? " flex items-center border rounded-lg duration-300 border-customPrimaryGreen font-semibold text text-customPrimaryGreen"
                : " flex items-center text-customGray08 border  border-transparent hover:bg-gray-200 rounded-lg duration-300"
            }
          >
            <li className="md:text-lg px-5 py-4 text-base">Pages to Read</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end md:gap-4 gap-2">
        <button className="btn md:py-4 md:px-7 md:text-lg bg-customPrimaryGreen h-fit hover:bg-green-500 sm:text-base text-sm font-semibold text-white outline-none">
          Sign In
        </button>

        <button className="btn md:py-4 md:px-7 md:text-lg bg-customSecondaryBlue h-fit hover:bg-blue-300 sm:text-base text-sm font-semibold text-white outline-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-book">Listed Books</NavLink>
      </li>
      <li>
        <a>Pages to Read</a>
      </li>
    </>
  );

  return (
    <header className="py-12">
      <div className="navbar bg-base-100 2xl:px-[135px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
            >
              {menu}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-[28px] font-bold">
            Book Vibe
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-[#131313]/80">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" bg-[#23BE0A] px-7 py-3 text-white rounded-lg text-lg font-semibold">
            Sign In
          </a>
          <a className="ml-4 bg-[#59C6D2] px-7 py-3 text-white rounded-lg text-lg font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

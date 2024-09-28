import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagesToRead">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0">
      <div className="navbar  bg-slate-100  font-bold flex justify-between container mx-auto ">
        <div className="">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center">
            <a className=" btn border-none shadow-lg shadow-black text-center text-4xl font-extrabold text-yellow-500 bg-black font-serif italic">
              চারুলতা ক্যাফে
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="flex gap-5 justify-end">
          <div>
            <Link className="text-white bg-green-400 w-40 text-center py-2 px-5 font-semibold rounded-xl  hover:bg-green-600">
              Sign in
            </Link>
          </div>
          <div>
            <Link className="text-white bg-blue-400 w-40 text-center py-2 px-5 font-semibold rounded-xl  hover:bg-blue-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

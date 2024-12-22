import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active1" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active1" : ""
          }
          to="/foods"
        >
          Avilable Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active1" : ""
          }
          to="/add-foods"
        >
          Add Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active1" : ""
          }
          to="/manage-foods"
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active1" : ""
          }
          to="/food-request"
        >
          Food Request
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-green-300">
      <div className="navbar bg-transparent p-0 max-w-screen-xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
              className="menu menu-sm dropdown-content rounded-box top-8 bg-green-100 z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl hover:bg-inherit">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end join">
          <NavLink to='/login' className={({isActive}) => `btn bg-green-400 join-item hover:bg-transparent hover:text-black hover:scale-105 ${isActive ? 'active1' : ''}`}>Log in</NavLink>
          <NavLink to='/sign-up' className={({isActive}) => `btn bg-green-400 join-item hover:bg-transparent hover:text-black hover:scale-105 ${isActive ? 'active1' : ''}`}>Sign Up</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

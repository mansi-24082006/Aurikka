import { Gem, Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      {/* navbar middle  */}
      <div className="navbar_middle flex items-center justify-center bg-[#bbbdbf] w-full h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center">
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-3xl font-inter font-medium capitalize flex items-center gap-2"
            >
              <Gem size="2rem" color="#FCC201" />
              <span className="text-black-500">Aurikaa</span>
            </Link>
          </div>

          <div className="search_box">
            <form action="#" className="max-w-[400px] h-[44px] relative">
              <input
                type="text"
                placeholder="Search here..."
                className="max-w-[443px] w-full h-full bg-white rounded-lg  pl-4"
              />

              <button className="absolute to-50% right-4 translate-y-1/2">
                <Search size="22px" color="#272343" />
              </button>
            </form>
          </div>

          {/* navbar middle right  */}
          <div className="navbar_middle_right flex items-center gap-5">
            <button className="btn capitalize">
              <ShoppingCart /> cart{" "}
              <div className="badge badge-sm bg-[#eb9443]">0</div>
            </button>
            <button className="btn capitalize">
              <Heart />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <User />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>
                    <Link>Account</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link>Logout</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* navbar bottom  */}
      <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between">
          <div className="navbar_bottom_left flex items-center gap-8">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn m-5 flex items-center gap-5 capitalize"
              >
                {" "}
                <Menu /> all categories
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Rings</a>
                </li>
                <li>
                  <a>Necklaces</a>
                </li>
                <li>
                  <a>Earrings</a>
                </li>
                <li>
                  <a>Bracelets</a>
                </li>
                <li>
                  <a>Anklets</a>
                </li>
                <li>
                  <a>Nose Pins</a>
                </li>
                <li>
                  <a>Custom Sets</a>
                </li>
              </ul>
            </div>

            <nav className="flex items-center gap-8 font-size-[20px];">
              <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
              <NavLink className="nav-link">Shop</NavLink>
              <NavLink className="nav-link">Collection</NavLink>
              <NavLink className="nav-link">Styles</NavLink>
              <NavLink className="nav-link">About Us</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

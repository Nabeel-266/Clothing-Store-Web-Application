import { Link, NavLink, useLocation } from "react-router";
import {
  CircleUser,
  ShoppingBag,
  Heart,
  LogOut,
  ShoppingCart,
  Search,
  User,
  SquareUser,
} from "lucide-react";

// Import Icon Images
import SearchIcon from "../../assets/Icons/search.png";
import ProfileIcon from "../../assets/Icons/profile.png";
import CartIcon from "../../assets/Icons/cart.png";

const Navbar = () => {
  const location = useLocation();
  const routeLocation = location.pathname;

  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 z-500 backdrop-blur-xs px-[4%] bg-transparent">
      {/* Navbar Container */}
      <div className="w-full px-[2%] h-[6.4rem] flex items-center justify-between">
        {/* Navbar Left */}
        <div className="w-[70%] h-full flex items-center gap-18">
          {/* LOGO */}
          <NavLink to="/">
            <h3 className="text-light text-[3.3rem] leading-[3.5rem] select-none">
              <span className="font-montAlter font-medium tracking-[0.01rem]">
                Influ
              </span>
              <span className="text-granite-400 font-righteous font-medium tracking-[0.05rem]">
                enze
              </span>
              .
            </h3>
          </NavLink>

          {/* Navigations */}
          <nav className="navigations mt-2">
            <ul className="flex items-center gap-[1rem] mt-[0.35rem]">
              {[
                ["COLLECTION", "/collection"],
                ["MENS", "/men"],
                ["WOMENS", "/women"],
                ["KIDS", "/kids"],
              ].map(([tilte, path], index) => (
                <li
                  key={index}
                  className={`nav-item font-medium font-montAlter tracking-widest hover:text-granite-300 transition-all duration-300 ${
                    routeLocation !== path ? "text-light" : "text-granite-300"
                  } `}
                >
                  <NavLink
                    to={path}
                    className="nav-link text-[1.6rem] leading-[1.6rem] text-center px-[0.6rem] whitespace-nowrap"
                  >
                    {tilte}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Navbar Right */}
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="authBtns flex items-center gap-[0.8rem] mt-1">
            {/* Search */}
            <Link to="/">
              <Search size={"2.5rem"} className="text-light" />
            </Link>

            {/* Profile */}
            <div className="relative group p-[1rem]">
              <SquareUser size={"2.5rem"} className="text-light" />

              <div className="min-w-[16rem] min-h-[10rem] p-[0.5rem] flex flex-col gap-[0.3rem] text-neutral-700 bg-lighter/75 shadow-lg shadow-black/10 ring-2 ring-black/5 absolute top-full -right-[50%] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 rounded-lg">
                <>
                  {[
                    {
                      Icon: CircleUser,
                      name: "My Account",
                      route: "/user/account",
                    },
                    {
                      Icon: ShoppingBag,
                      name: "Orders",
                      route: "/user/orders",
                    },
                    { Icon: Heart, name: "WishList", route: "/user/wishlist" },
                  ].map(({ Icon, name, route }, index) => (
                    <Link
                      key={index}
                      to={route}
                      className="w-full flex items-center gap-[0.8rem] px-[0.8rem] py-[0.3rem] hover:bg-granite-300 hover:text-neutral-700 transition-all duration-200 rounded-lg"
                    >
                      <Icon size={18} />
                      <span className="text-[1.5rem] font-medium whitespace-nowrap">
                        {name}
                      </span>
                    </Link>
                  ))}
                </>

                <hr className="text-neutral-400" />

                <button className="appearance-none w-full flex items-center gap-[0.8rem] px-4 py-[0.4rem] hover:bg-rustic-500 hover:text-light transition-all duration-200 rounded-lg cursor-pointer">
                  <LogOut size={18} />
                  <span className="text-[1.5rem] font-medium whitespace-nowrap">
                    Logout
                  </span>
                </button>
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={"2.3rem"} className="text-light" />

              <span className="absolute z-10 -bottom-[0.6rem] -right-[0.7rem] text-center text-light text-[1.1rem] leading-[1.1rem] font-bold bg-granite-800 px-2 pt-[0.4rem] pb-[0.3rem] rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
// import component
import Drawer from "react-modern-drawer";
//import styles
import { toast } from "react-hot-toast";
import "react-modern-drawer/dist/index.css";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userSignout } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignout()
      .then(() => toast.success("Successfully sign out!"))
      .catch((err) => toast.error(err.massage));
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-[#FFCD70] w-full py-6 px-5 lg:px-0">
        <div className="container mx-auto">
          <div className=" grid items-center grid-cols-2 lg:grid-cols-3">
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink to="/" className="text-lg font-medium">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="text-lg font-medium">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/course" className="text-lg font-medium">
                  Course
                </NavLink>
              </li>
            </ul>
            <Link to="/" className="inline-flex items-center lg:mx-auto">
              <span className="ml-2 text-3xl font-bold text-gray-900">
                Interview Prep
              </span>
            </Link>
            <ul className="items-center hidden ml-auto lg:flex">
              {user?.email ? (
                <>
                  <li>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label tabIndex={0} className="">
                        <BsThreeDotsVertical className="text-2xl text-gray-900" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 mt-2 mr-2 shadow bg-gray-800 text-[#FFCD70] rounded w-40"
                      >
                        <li>
                          <Link>Profile</Link>
                        </li>
                        <li>
                          <Link>Dashboard</Link>
                        </li>
                        <li onClick={handleSignOut}>
                          <button>Log Out</button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="text-lg font-medium mr-5">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className=" text-white bg-black/90 py-3 px-4 rounded-full"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="ml-auto lg:hidden">
              <button onClick={toggleDrawer}>
                <FiMenu className="text-2xl font-medium text-gray-800" />
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className=""
                size="50%"
              >
                <div className="bg-gray-800 h-full w-full pr-5 py-10">
                  <div className="ml-5">
                    <CiLogin
                      onClick={toggleDrawer}
                      className="text-gray-100 text-2xl"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2 text-[#FFCD70]">
                    <NavLink to="/home" onClick={toggleDrawer} className="">
                      Home
                    </NavLink>
                    <NavLink to="/blogs" onClick={toggleDrawer} className="">
                      Blog
                    </NavLink>
                    <NavLink to="/course" onClick={toggleDrawer} className="">
                      Course
                    </NavLink>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

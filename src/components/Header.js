import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content start --> */}
          <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div class="relative grid items-center grid-cols-2 lg:grid-cols-3">
              <ul class="items-center hidden space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
              <Link
                to="/"
                aria-label="Online Tutorin"
                title="Online Tutorin"
                class="inline-flex items-center lg:mx-auto"
              >
                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  Online-Tutor
                </span>
              </Link>
              <ul class="items-center hidden ml-auto space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="Sign in"
                    title="Sign in"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign in
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
              <div class="ml-auto lg:hidden">
                <label htmlFor="nav-drawer" className="drawer-button">
                  <FiMenu className="text-2xl text-black" />
                </label>
              </div>
            </div>
          </div>
          {/* <!-- Page content end --> */}
        </div>

        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-1/2 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

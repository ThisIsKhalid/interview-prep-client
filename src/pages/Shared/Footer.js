import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  let bgColor;
  if (pathname === "/home" || pathname === "/") {
    bgColor = "bg-[#ffefe7db]";
  } else {
    bgColor = "bg-slate-50";
  }

  return (
    <section className={`pt-10 ${bgColor}`}>
      <div className="container mx-auto bg-gray-800 pt-20 pb-10 md:rounded-t-3xl px-10 text-white">
        <div className="grid lg:grid-cols-5 grid-cols-2  gap-3">
          <div className="col-span-2">
            <h1 className="text-3xl mb-4 text-[#FFCD70] font-bold">
              Interview Prep
            </h1>
            <p className="text-gray-400 md:w-[80%] w-full">
              We are dedicated to helping individuals enhance their interview
              skills and succeed in their job search. Our platform provides
              valuable resources and tips to prepare you for your next
              interview.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Links</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Courses</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Resources</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link> Interview Tips</Link>
              </li>
              <li>
                <Link> Resume Templates</Link>
              </li>
              <li>
                <Link> Interview Techniques</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Product</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Integrations</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* footer down */}
        <div className="mt-20 flex items-center justify-between text-gray-300 text-sm">
          <div className="flex items-center ">
            <p>
              © Khalid Hasan {new Date().getFullYear()} | All right reserved.
            </p>
          </div>
          <div>
            <p className="">Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

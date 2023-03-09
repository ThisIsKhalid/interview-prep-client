import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

  const {pathname} = useLocation();
  // console.log(pathname);
  let bgColor;
  if(pathname === '/home' || pathname == '/'){
    bgColor = "bg-[#ffefe7db]";
  }
  else {
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
            <p className="text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus et corrupti sapiente corporis perferendis natus quaerat
              commodi, enim tempora tenetur!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Company</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Press Kit</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Resources</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link>Guide</Link>
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
                <Link>Enterprise</Link>
              </li>
              <li>
                <Link>Integrate</Link>
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

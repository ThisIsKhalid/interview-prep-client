import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import signinImg from "../../assets/images/Sign in.svg";
import { AuthContext } from "../../Context/AuthProvider";

const LogIn = () => {
  const { userLogin } = useContext(AuthContext);

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    userLogin(email, password)
    .then(res => {
      console.log(res.user);
      toast.success('Login successfull!')
      form.reset();
    })
    .catch(err => {
      toast.error(err.massage)
      console.log(err.massage);
    })
  };

  return (
    <div className="flex lg:flex-row flex-col items-center justify-evenly py-20 mx-5 md:mx-0">
      <div className="lg:w-1/2 md:w-3/4 w-full">
        <img className="w-3/4 mx-auto" src={signinImg} alt="" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 shadow-lg mt-5 border border-gray-200 mx-auto">
        <h1 className="text-2xl font-bold text-center">Sign IN</h1>
        <form
          onSubmit={handleSignin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md text-gray-800 text-lg "
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-gray-800 text-lg"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-md text-gray-900 hover:text-[#FFCD70] hover:bg-gray-800 bg-[#FFCD70] uppercase font-medium transition-colors delay-75 duration-300">
            Sign IN
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-800">
            Sign In with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="text-3xl">
            <FaGoogle></FaGoogle>
          </button>
          <button className="text-3xl">
            <FaGithub></FaGithub>
          </button>
          <button className="text-3xl">
            <FaFacebook></FaFacebook>
          </button>
        </div>

        <p className="text-center sm:px-6 text-gray-600">
          Don't have an account?
          <Link to="/signup" className="underline text-orange-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

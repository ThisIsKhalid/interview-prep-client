import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import signupImg from '../../assets/images/Sign up-bro.svg'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import Button1 from '../../components/buttons/Button_1';

const SignUp = () => {
  const { register } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);
    register(email, password)
      .then((data) => {
        // console.log(data.user);
        toast.success("Successfully registered!");
        form.reset();
      })
      .catch((error) => {
        if(error){

          toast.error(error.message);
        }
      });

  }

    return (
      <div className="flex lg:flex-row flex-col items-center justify-evenly py-20 mx-5 md:mx-0">
        <div className="lg:w-1/2 md:w-3/4 w-full">
          <img className="w-3/4 mx-auto" src={signupImg} alt="" />
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 shadow-lg mt-5 border border-gray-200 mx-auto">
          <h1 className="text-2xl font-bold text-center">Sign UP</h1>
          <form
            onSubmit={handleSignUp}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
              required
                type="text"
                name="name"
                id="username"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-700 bg-gray-50"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="photo" className="block text-gray-700">
                Photo URL
              </label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photoURL"
                id="photo"
                className="file-input file-input-bordered w-full"
              />
            </div>
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
                className="w-full px-4 py-3 rounded-md text-gray-800 border border-gray-700 bg-gray-50"
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
                className="w-full px-4 py-3 rounded-md text-gray-800  border border-gray-700 bg-gray-50"
              />
            </div>
            {/* <button className="block w-full p-3 text-center rounded-md text-gray-900 hover:text-[#FFCD70] hover:bg-gray-800 bg-[#FFCD70] uppercase font-medium transition-colors delay-75 duration-300">
              Sign UP
            </button> */}
            <Button1 className="w-full" text="Sign Up" />
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-800">
              Sign Up with social accounts
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
            Already have an account?
            <Link to="/login" className="underline text-orange-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;
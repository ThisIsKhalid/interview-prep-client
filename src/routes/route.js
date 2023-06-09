import { createBrowserRouter } from "react-router-dom";
import PlayVideo from "../components/PlayVideo";
import MainLayout from "../layout/MainLayout";
import Blogs from "../pages/Blog/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/SignIn/LogIn";
import SignUp from "../pages/SignIn/SignUp";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <PlayVideo />,
      },
      {
        path: "/coursedetails",
        element: <CourseDetails />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

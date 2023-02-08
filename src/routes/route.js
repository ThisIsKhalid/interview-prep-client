import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import PlayVideo from "../components/PlayVideo";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Course/Courses";
import Home from "../pages/Home/Home";
import LogIn from "../pages/SignIn/LogIn";
import SignUp from "../pages/SignIn/SignUp";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <PlayVideo />,
      },
      // {
      //   path: "/module/:id",
      //   element: <PlayVideo />,
      // },
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

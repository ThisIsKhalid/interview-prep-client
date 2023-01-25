import { createBrowserRouter } from "react-router-dom";
import PlayVideo from "../components/PlayVideo";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Course/Courses";
import Home from "../pages/Home/Home";

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
        path: "/course/:name",
        element: <PlayVideo />,
      },
    ],
  },
]);

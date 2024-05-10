import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import Work from "./layout/Work";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Project1 from "./layout/projects/Project1";
import Project2 from "./layout/projects/Project2";
import Project3 from "./layout/projects/Project3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/work/project1",
        element: <Project1 />,
      },
      {
        path: "/work/project2",
        element: <Project2 />,
      },
      {
        path: "/work/project3",
        element: <Project3 />,
      },
    ],
  },
]);

export default router;

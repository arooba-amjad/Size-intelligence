import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Home from "./components/pages/Home/Home";
import Docs from "./components/pages/Docs/Docs";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "docs",
          element: <Docs />,
        },
      ],
    },
  ],
  {
    basename: "/Size-intelligence",
  }
);

export default router;
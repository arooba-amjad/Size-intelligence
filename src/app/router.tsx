import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";

import Home from "../components/pages/Home/Home";
import Docs from "../components/pages/Docs/Docs";
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
    {
      path: "/get-api-key",
      element: <GetApiKey />,
    },
  ],
  {
    basename: "/Size-intelligence",
  }
);

export default router;

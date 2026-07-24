import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";

import Home from "../pages/Home/Home";
import Docs from "../pages/Docs/Docs";
import GetApiKey from "../pages/GetApiKey/GetApiKey";
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

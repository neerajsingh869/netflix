import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons/lib";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Gpt from "./pages/Gpt.jsx";
import Login from "./pages/Login.jsx";
import Browse from "./pages/Browse.jsx";
import BrowseSeries from "./pages/BrowseSeries.jsx";
import Header from "./components/Header.jsx";
import Page404 from "./components/Page404.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import NonPrivateRoute from "./components/NonPrivateRoute.jsx";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: (
          <NonPrivateRoute>
            <Login />
          </NonPrivateRoute>
        ),
      },
      {
        path: "browse",
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Browse />
              </PrivateRoute>
            ),
          },
          {
            path: "series",
            element: (
              <PrivateRoute>
                <BrowseSeries />
              </PrivateRoute>
            ),
          },
          {
            path: "gpt",
            element: (
              <PrivateRoute>
                <Gpt />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{ className: "text-sm sm:text-base md:text-xl lg:text-3xl" }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </IconContext.Provider>
  </React.StrictMode>
);

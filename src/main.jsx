import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Login from "./pages/Login.jsx";
import Browse from "./pages/Browse.jsx";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store.js";
import Header from "./components/Header.jsx";
import Page404 from "./components/Page404.jsx";
import Gpt from "./pages/Gpt.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import NonPrivateRoute from "./components/NonPrivateRoute.jsx";

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
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);

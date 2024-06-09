import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from './pages/Browse.jsx'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>,
)

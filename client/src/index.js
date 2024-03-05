// import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
// import Blog from "./Views/Blogs/Blog.js";
import BlogCard from "./Component/BlogCard/Blogcard.js";
import App from './App.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    // errorElement: <NotFound />
    ,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <BlogCard />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "test",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

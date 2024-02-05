import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/AuthPages/Login";
import Register from "../../Pages/AuthPages/Register";
import Notfound from "../../Pages/NotFound/Notfound";

const Homepages = lazy(() => import("../../Pages/Homepages"));
const Chatpages = lazy(() => import("../../Pages/Chatpages"));

const router = createBrowserRouter([
  { path: "/", element: <Homepages /> },
  { path: "/chats", element: <Chatpages /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Notfound /> },
]);

export default router;

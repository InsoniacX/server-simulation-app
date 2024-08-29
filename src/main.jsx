import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage.jsx';
import LandingPage from './pages/LandingPage';
import SimulationPage from './pages/SimulationPage';
import Dashboard from './pages/Dashboard';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/simulation",
    element: <SimulationPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
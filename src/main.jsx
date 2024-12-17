import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages and components
// Lazy-load pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProjectPage = lazy(() => import("./pages/ProjectPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const Launchpad = lazy(() => import("./pages/Launchpad.jsx"));
const CreateAccount = lazy(() => import("./pages/CreateAccount.jsx"));
const PledgePage = lazy(() => import("./pages/PledgePage.jsx"));

// import HomePage from "./pages/HomePage.jsx";
// import ProjectPage from "./pages/ProjectPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import Launchpad from "./pages/Launchpad.jsx";
// import CreateAccount from "./pages/CreateAccount.jsx";

import Loading from "./components/Loading.jsx";
import NotFound from "./components/NotFound.jsx";
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

// Create router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/launchpad", element: <Launchpad /> },
      { path: "/signup", element: <CreateAccount /> },
      { path: "/pledge", element: <PledgePage />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Wrap the RouterProvider with Suspense for the loading animation */}
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </React.StrictMode>
);


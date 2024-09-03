import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import MainRoute from "../layout/MainRoute";
import Error from "../pages/Error";
import { auth } from "../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function AppRoute() {
  const [user] = useAuthState(auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute user={user} />,
      errorElement: <Error />,
      children: routes.map(({ path, element }) => ({
        path,
        element,
      })),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoute;

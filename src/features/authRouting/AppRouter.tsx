import { createBrowserRouter } from "react-router";
import { NotFoundPage } from "pages/not-found/ui/NotFoundPage";
import { LoginPage } from "./LoginPage";
import { ProfilePage } from "./ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { App } from "app/App";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "profile",
        element: <ProtectedRoute />,
         children: [
          { path: "", element: <ProfilePage /> },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

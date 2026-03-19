import { createBrowserRouter } from "react-router";
import { TaskPage } from "pages/tasks/ui/TaskPage";
import { NotFoundPage } from "pages/not-found/ui/NotFoundPage";
import { RegistrationPage } from "pages/registration/ui/RegistrationPage";
import { App } from "app/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TaskPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

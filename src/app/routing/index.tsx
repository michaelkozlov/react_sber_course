import { createBrowserRouter } from "react-router";
import { TaskPage } from "pages/tasks/ui/TaskPage";
import { NotFoundPage } from "pages/not-found/ui/NotFoundPage";
import { RegistrationPage } from "pages/registration/ui/RegistrationPage";
import { App } from "app/App";
import { Task5Page } from "pages/task-5/ui/Task5Page";
import { PortalShowcasePage } from "pages/portal-show-case/PortalShowcase";

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
        path: "task5",
        element: <Task5Page />,
      },
      {
        path: "task8",
        element: <PortalShowcasePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

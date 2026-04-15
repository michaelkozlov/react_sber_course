import { createBrowserRouter } from "react-router";
import { TaskPage } from "pages/tasks/ui/TaskPage";
import { NotFoundPage } from "pages/not-found/ui/NotFoundPage";
import { RegistrationPage } from "pages/registration/ui/RegistrationPage";
import { App } from "app/App";
import { Task5Page } from "pages/task-5/ui/Task5Page";
import { Task9Page } from "pages/task-9/Task9Page";

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
        path: "task9",
        element: <Task9Page />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

import type { FC } from "react";
import { TaskWidget } from "widgets/tasks/ui/TaskWidget";

export const TaskPage: FC = () => {
  return (
    <div>
      <h1>Мои задачи</h1>

      <TaskWidget />
    </div>
  );
};

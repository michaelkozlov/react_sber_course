import type { FC } from "react";
import { TaskList } from "features/taskList/ui/TaskList";
import { useTasks } from "features/taskList/model/useTasks";

export const TaskWidget: FC = () => {
  const { tasks, removeTask, setFilter } = useTasks();

  return (
    <TaskList tasks={tasks} removeTask={removeTask} setFilter={setFilter} />
  );
};

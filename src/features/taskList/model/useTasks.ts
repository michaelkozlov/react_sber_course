import { useMemo, useState } from "react";
import type { ITask } from "entities/task";

const initialTasks: ITask[] = [
  { id: "1", title: "task 1", completed: false },
  { id: "2", title: "task 2", completed: true },
  { id: "3", title: "task 3", completed: false },
  { id: "4", title: "task 4", completed: true },
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [filter, setFilter] = useState<string>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    if (filter === "incomplete") {
      return tasks.filter((task) => !task.completed);
    }

    return tasks;
  }, [filter, tasks]);

  const removeTask = (id: string): void => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  return { tasks: filteredTasks, filter, removeTask, setFilter };
};

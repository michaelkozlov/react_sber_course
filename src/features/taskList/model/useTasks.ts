import { useCallback, useEffect, useMemo, useState } from "react";
import type { ITask } from "entities/task";
import { useGetTasksQuery } from "../api/tasksApi";

export const useTasks = () => {
  const { data: tasksData } = useGetTasksQuery();

  const [tasks, setTasks] = useState<ITask[]>([]);
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

  const removeTask = useCallback((id: string): void => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }, []);

  const filteredOptions = useMemo(() => {
    return [
      { id: 1, value: "all", label: "Все задачи" },
      { id: 2, value: "completed", label: "Завершенные" },
      { id: 3, value: "incomplete", label: "Незавершенные" },
    ];
  }, []);

  useEffect(() => {
    if (tasksData && tasks.length === 0) {
      setTasks(tasksData);
    }
  }, [tasksData]);

  return {
    tasks: filteredTasks,
    filter,
    removeTask,
    setFilter,
    filteredOptions,
  };
};

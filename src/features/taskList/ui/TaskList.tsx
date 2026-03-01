import type { FC } from "react";
import { TaskCard } from "entities/task/ui/TaskCard";
import clsx from "clsx";
import styles from "./TaskList.module.css";
import type { ITaskListProps } from "../model/types";

export const TaskList: FC<ITaskListProps> = ({
  tasks,
  removeTask,
  setFilter,
}) => {
  return (
    <div className={clsx(styles["tasks-main"])}>
      <select
        className={clsx(styles["tasks-select"])}
        name="tasks-filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Все задачи</option>
        <option value="completed">Завершенные</option>
        <option value="incomplete">Незавершенные</option>
      </select>

      <div className={clsx(styles["tasks-list"])}>
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} onRemove={removeTask} />
        ))}
      </div>
    </div>
  );
};

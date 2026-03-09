import type { FC } from "react";
import { TaskCard } from "entities/task/ui/TaskCard";
import clsx from "clsx";
import styles from "./TaskList.module.css";
import type { ITaskListProps } from "../model/types";
import { Select } from "shared/select/ui/Select";
import React from "react";

export const TaskList: FC<ITaskListProps> = ({
  tasks,
  removeTask,
  setFilter,
  filteredOptions,
}) => {
  return (
    <div className={clsx(styles["tasks-main"])}>
      <Select options={filteredOptions} onChange={setFilter} />

      <div className={clsx(styles["tasks-list"])}>
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <TaskCard {...task} />

            <button
              className={clsx(styles["remove-button"])}
              onClick={() => removeTask(task.id)}
            >
              Удалить задачу
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

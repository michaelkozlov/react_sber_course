import type { FC } from "react";
import styles from "./TaskCard.module.css";
import clsx from "clsx";
import type { ITaskCardProps } from "../model/types";

export const TaskCard: FC<ITaskCardProps> = ({
  id,
  title,
  completed,
  onRemove,
}) => {
  return (
    <div key={id}>
      <div className={clsx(styles["task-wrapper"])}>
        {title}

        <div className={clsx(styles["status-wrapper"])}>
          <div className={clsx(styles["status-title"])}>Статус:</div>
          <div>{completed ? "Выполнено" : "Не выполнено"}</div>
        </div>

        <button
          className={clsx(styles["remove-button"])}
          onClick={() => onRemove(id)}
        >
          Удалить задачу
        </button>
      </div>
    </div>
  );
};

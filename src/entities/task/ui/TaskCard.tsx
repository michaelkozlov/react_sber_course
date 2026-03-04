import styles from "./TaskCard.module.css";
import clsx from "clsx";
import type { ITask } from "../model/types";
import React from "react";

export const TaskCard = React.memo(({ id, title, completed }: ITask) => {
  return (
    <div key={id}>
      <div className={clsx(styles["task-wrapper"])}>
        {title}

        <div className={clsx(styles["status-wrapper"])}>
          <div className={clsx(styles["status-title"])}>Статус:</div>
          <div>{completed ? "Выполнено" : "Не выполнено"}</div>
        </div>
      </div>
    </div>
  );
});

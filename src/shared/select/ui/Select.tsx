import clsx from "clsx";
import type { FC } from "react";
import styles from "./Select.module.css";
import type { ISelectProps } from "../model/types";

export const Select: FC<ISelectProps> = ({ options, onChange }) => {
  return (
    <select
      className={clsx(styles["main"])}
      name="tasks-filter"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => {
        return (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

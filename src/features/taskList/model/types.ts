import type { ITask } from "entities/task";
import type { TSelectOptions } from "shared/select/model/types";

export type TFilter = "all" | "completed" | "incomplete";

export interface IUseTasksParams {
  tasks: ITask[];
  filter: TFilter;
  setFilter: (f: string) => void;
  removeTask: (id: string) => void;
}

export interface ITaskListProps {
  tasks: ITask[];
  setFilter: (f: string) => void;
  removeTask: (id: string) => void;
  filteredOptions: TSelectOptions;
}

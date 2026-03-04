export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITaskCardProps extends ITask {
  onRemove: (id: string) => void;
}

import { Box, Button, TextField, Typography } from "@mui/material";
import {
  startTransition,
  useOptimistic,
  useState,
  type ChangeEventHandler,
  type FC,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface ITask {
  id: string;
  title: string;
}

type TOptimisticTask = ITask & {
  isOptimistic?: boolean;
};

export const TodoListOptimistic: FC = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [optimisticTaskList, setOptimisticTaskList] = useOptimistic<
    TOptimisticTask[],
    TOptimisticTask
  >(taskList, (state, newOptimisticTask) => [...state, newOptimisticTask]);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const changeHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setTaskName(e.target.value);
  };

  const addTask = async () => {
    const newTask = {
      id: uuidv4(),
      title: taskName,
    };

    startTransition(async () => {
      setOptimisticTaskList({ ...newTask, isOptimistic: true });

      await wait(2e3);

      startTransition(() => {
        setTaskList((prev) => {
          return [...prev, newTask];
        });
      });
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        TodoListOptimistic
      </Typography>

      <Typography align="center" variant="h4" sx={{ mb: 2 }}>
        Tasks:
      </Typography>

      <Box sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
        {optimisticTaskList.map(({ id, title, isOptimistic }) => (
          <Box key={id} sx={{ opacity: isOptimistic ? 0.5 : 1 }}>
            {title}
          </Box>
        ))}
      </Box>

      <TextField
        name="textField"
        sx={{ mb: 2 }}
        fullWidth
        label="Название задачи"
        variant="outlined"
        type="text"
        onChange={changeHandler}
      />

      <Button type="button" onClick={addTask}>
        Добавить задачу
      </Button>
    </Box>
  );
};

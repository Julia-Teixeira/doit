import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

interface iTaskProviderProps {
  children: ReactNode;
}

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within an taskProvider");
  }
  return context;
};

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TaskContextData {
  tasks: Task[];
  createTask: (data: Task, accessToken: string) => Promise<void>;
}

export const TaskProvider = ({ children }: iTaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const createTask = useCallback(async (data: Task, accessToken: string) => {
    api
      .post("tasks", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: AxiosResponse<Task>) =>
        setTasks((old) => [...old, response.data])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

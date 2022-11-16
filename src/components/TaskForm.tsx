import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "./TaskForm.module.css";
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  task?: ITask | null;
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      // A exclamação dá certeza que a função ou váriável terá valor e não há chances de vir undefined ou null.
      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDifficultyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(parseInt(e.target.value));
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleDifficultyChange}
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;

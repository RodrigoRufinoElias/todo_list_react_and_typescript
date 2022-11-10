import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "./TaskForm.module.css";
import { ITask } from "../interfaces/Task";

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = {id, title, difficulty};

    // A exclamação força uma função a ser chamada mesmo no caso dela vir undefined
    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
    
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
            <input type="text" name="title" placeholder='Título da tarefa' onChange={handleTitleChange} value={title} />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name="difficulty" placeholder='Dificuldade da tarefa' onChange={handleDifficultyChange} value={difficulty} />
        </div>

        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm
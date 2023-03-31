import toDologo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTasks: (taskTitle: string) => void;
}

export const Header = ({ onAddTasks }: Props) => {
  const [title, setTitle] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTasks(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={toDologo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          onChange={onChangeTitle}
          value={title}
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

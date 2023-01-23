import plus from "../assets/plus.svg";
import styles from "./Input.module.css";

export function Input(props) {
  return (
    <div className={styles.input}>
      <form onSubmit={props.handleSubmit}>
        <input
          // name=""
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={props.newTaskText}
          onChange={props.handleNewTaskChange}
          required
        />

        <button type="submit">
          Criar
          <img src={plus} alt="plus" />
        </button>
      </form>
    </div>
  );
}

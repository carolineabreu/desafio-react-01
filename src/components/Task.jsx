import trash from '../assets/trash.svg';
import styles from "./Task.module.css";

export function Task({ id, title, onDeleteTask, onChangeIsCheck, check }) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeIsCheck() {
    onChangeIsCheck(id);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type='checkbox'
        onClick={handleChangeIsCheck}
        checked={check}
        id={id}
      />
      <p className={styles.title}>{title}</p>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <img src={trash} alt='trash' />
      </button>
    </div>
  );
}

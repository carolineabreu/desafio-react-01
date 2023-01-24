//import { Trash } from 'phosphor-react';
import checks from '../assets/check(1).svg';
import checked from "../assets/check.svg";
import trash from "../assets/trash.svg";
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
      <button
        className={styles.checkbox}
        type='button'
        onClick={handleChangeIsCheck}
        check={check}
        id={id}
      >
        {check === true ? (
          <img src={checks} alt='check' />
        ) : (
          <img src={checked} alt='checked' />
        )}
      </button>
      <p className={!check ? styles.title : styles.titleDone}>{title}</p>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <img src={trash} alt='trash' />
        {/* <Trash size={24} /> */}
      </button>
    </div>
  );
}

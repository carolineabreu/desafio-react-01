import { useState } from 'react';
import { Input } from './Input';
import styles from './Tasks.module.css';

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleSubmit() {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <>
      <Input
        handleSubmit={handleSubmit}
        newTaskText={newTaskText}
        handleNewTaskChange={handleNewTaskChange}
      />
      <div className={styles.info}>
        <div className={styles.info2}>
          <div className={styles.createdTasks}>
            <p>Tarefas criadas <span>0</span></p>
          </div>
          <div className={styles.finishedTasks}>
            <p>Concluídas <span>0</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

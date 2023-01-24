import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clipboard from '../assets/Clipboard.png';
import styles from './AllTasks.module.css';
import { Input } from './Input';
import { Task } from './Task';

export function AllTasks() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState('');

  const [checked, setChecked] = useState(0);

  function handleCreateNewTask() {
    event.preventDefault();

    const newToDo = {
      id: uuidv4(),
      title: newTaskText,
      check: false
    };

    setTasks([...tasks, newToDo]);
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleCheckedTasks() {
    let total = 0;
    tasks.filter((currentTask) => {
      if (currentTask.check === true) {
        total++;
      }
    });
    setChecked(total);
  };

  function isCheck(id) {
    tasks.map((currentTask) => {
      if (currentTask.id === id) {
        currentTask.check = !currentTask.check;
      }
    });
    handleCheckedTasks();
  };


  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter((currentTask) => {
      return currentTask.id !== id;
    });
    tasks.map((currentTask) => {
      if (currentTask.id === id && currentTask.check === true) {
        isCheck(id);
      }
    });

    setTasks(tasksWithoutDeletedOne);
  };

  console.log(tasks);
  console.log(checked);

  return (
    <>
      <Input
        handleSubmit={handleCreateNewTask}
        newTaskText={newTaskText}
        handleNewTaskChange={handleNewTaskChange}
      />
      <div className={styles.info}>
        <div className={styles.info2}>
          <div className={styles.createdTasks}>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
          </div>
          <div className={styles.finishedTasks}>
            <p>Concluídas <span>{checked}</span></p>
          </div>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks.map((currentTask) => {
          return (
            <div className={styles.task}>
              <Task
                id={currentTask.id}
                title={currentTask.title}
                onChangeIsCheck={isCheck}
                onDeleteTask={deleteTask}
                checked={currentTask.check}
              />
            </div>
          );
        })
      ) : (
        <div className={styles.allClipboard}>
          <div className={styles.clipboard}>
            <img src={clipboard} alt='clipboard' />
            <p className={styles.clipboardText}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}

    </>
  );
}

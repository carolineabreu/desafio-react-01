import { useState } from 'react';
import { Input } from './Input';

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
      <div>

      </div>
    </>
  );
}

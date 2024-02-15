import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  const { id, text, completed } = task;

  const handleCheckboxChange = () => {
    toggleTaskCompletion(id);
  };

  const handleDeleteClick = () => {
    deleteTask(id);
  };

  return (
    <li className={completed ? 'task-item complete' : 'task-item'}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={handleCheckboxChange} 
      />
      <span>{text}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Task;

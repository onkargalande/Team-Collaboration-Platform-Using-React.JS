import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText.trim());
      setTaskText('');
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={taskText} 
        onChange={handleInputChange} 
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;

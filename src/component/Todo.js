import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask, toggleTask } from '../reduc/todoSlice';
import './Todo.css';

export const Todo = () => {
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState('');

  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    console.log("newTask", newTask);
    dispatch(addTask(newTask));
    setTaskInput('');
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  // const handleEditTask = (id) => {
  //   console.log("edit");
  //   dispatch(editTask(id));
  // };
  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskInput(text);
  };
  const handleSaveTask = (id) => {
    if (editTaskInput.trim() === '') return;
    dispatch(editTask({ id, text: editTaskInput }));
    setEditTaskId(null);
    setEditTaskInput('');
  };
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const filteredTasks = tasks.filter(task => {
    console.log("task", task);
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add a new task" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="todo-filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul className="todo-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>

            <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)}
            />
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editTaskInput}
                onChange={(e) => setEditTaskInput(e.target.value)}
              />
            ) : (
              <span onDoubleClick={() => handleEditTask(task.id, task.text)}>{task.text}</span>
            )}
            {editTaskId === task.id ? (
              <button onClick={() => handleSaveTask(task.id)}>Save</button>
            ) : (
              <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
            )}           
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

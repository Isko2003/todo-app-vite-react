import React, { useState } from 'react'
import '../App.css';
const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const clearInput = () => {
    setNewTodo('');
  }

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999999999),
      content: newTodo
    }
    
    onCreateTodo(request);
    clearInput();
  }

  return (
    <div className='todo-create'>
        <input 
        value={newTodo}
        type="text" 
        className='todo-input'
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='todo-create-button' onClick={createTodo}>Todo Olustur</button>
    </div>
  )
}

export default TodoCreate
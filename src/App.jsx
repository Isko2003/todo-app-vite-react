import React from 'react';
import { useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate';
import TodoList from './Components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos])
  }

  console.log(todos);
  return (
   <div className='app'>
      <div className='main'>
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList todos = {todos} onRemoveTodo = {removeTodo} 
        onEditTodo = {updateTodo} />
      </div>
   </div>
  )
}

export default App

import React from 'react'
import '../App.css';
import Todo from './Todo';
const TodoList = ({ todos, onRemoveTodo, onEditTodo }) => {
  return (
    <div style={{width: '100%', marginTop: '40px'}}>
      {
        todos && todos.map((todo, index) => (
          <Todo key={index} todo={todo} removeTodo = {onRemoveTodo}
           editTodo = {onEditTodo} />
        ))
      }
    </div>
  )
}

export default TodoList
import React, { useState } from 'react'
import '../App.css';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Todo = ({ todo, removeTodo, editTodo }) => {

  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [todoValue, setTodoValue] = useState(content);
  
  const removeTodoLast = () => {
    removeTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: todoValue
    }

    editTodo(request);
    setEditable(false);
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '3px', marginTop: '8px'}}>
        <div>
            {
              editable ? <input value={todoValue} className='todo-edit-input' type='text' onChange={(e) => setTodoValue(e.target.value)} />: content
            }
        </div>
        <div>
            <IoIosRemoveCircleOutline  style={{cursor: 'pointer'}} className='todo-icons' onClick={removeTodoLast}/>
            {
              editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : 
              <FaRegEdit style={{cursor: 'pointer'}} className='todo-icons' onClick={() => setEditable(true)}/>
            }
        </div>
    </div>
  )
}

export default Todo
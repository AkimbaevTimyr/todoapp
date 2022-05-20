import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import Task from '../Task'
import { addTodos, } from '../../http/taskApi';
import { observer } from 'mobx-react-lite'
import { getTodos } from '../../http/taskApi';
import { check } from '../../http/userApi';

const Main = observer(() => {
  const { user } = useContext(Context)
  const { todo } = useContext(Context)
  useEffect(() => {
    check().then(data => {
      user.setAuth(true)
    })
  }, [])
  
  
  useEffect(() => {
    getTodos(user.userId).then(data => todo.setTodo(data))
  }, [todo])

  
  const [text, setText] = useState('')
  const addTodo = () => {
    if (text) {
      const todo = {
        todoid: Date.now(),
        text,
        user_id: user.userId
      }
      setText('')
      addTodos(todo)
    } else {
      alert('Введите пожалуйста текст')
    }
  }

  return (
    <div >
      {user.isAuth === true ? (<div className="wrapper"> <div className="task-input">
        <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
        <button className='add-btn' onClick={() => addTodo()}>Add</button>
      </div>
        <ul className="task-box">
          {todo.todo.map(el => (
            <Task key={el.id} todoItem={el} id={el.id} />
          ))}
        </ul></div>) : (<div>Пожалуйста Войдите</div>)}
    </div>
  )
})


export default Main

{/* <button className='add-btn' onClick={()=> handleClick(1)}>Clear All</button> */ }
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import Task from '../Task'
import { addTodos, } from '../../http/taskApi';
import { observer } from 'mobx-react-lite'
import { getTodos } from '../../http/taskApi';

const Main = observer(() => {
  const { todo } = useContext(Context)
  const { user } = useContext(Context)
  const id = localStorage.getItem('id')
  const [text, setText] = useState('')
  const [bool, setBool] = useState(false)
  const addTodo = async (e) => {
    e.preventDefault()
    setBool(true)
    if (text) {
      const todo = {
        todoid: Date.now(),
        text,
        user_id: id
      }
      setText('')
      await addTodos(todo)
    } else {
      alert('Введите пожалуйста текст')
    }
    setBool(false)
  }

  useEffect(() => {
    getTodos(id).then(data => todo.setTodo(data))
  }, [bool])

  return (
    <div>
      {user.isAuth === true ? (<div className="wrapper">
        <form onSubmit={(e)=> addTodo(e) }>
          <div className="task-input">
            <input value={text || ''} type="text" onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
            <button type='submit' className='add-btn'>Add</button>
          </div>
      </form>
        <ul className="task-box">
          {todo.todo.map((el, index) => (
            <Task key={index} todoItem={el} id={el.id} />
          ))}
        </ul></div>) : (<div className='please'>Пожалуйста Войдите</div>)}
    </div>
  )
})

export default Main

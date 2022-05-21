import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../..'
import Task from '../Task'
import { addTodos, } from '../../http/taskApi';
import { observer } from 'mobx-react-lite'
import { getTodos } from '../../http/taskApi';
import { check } from '../../http/userApi';

const Main = observer(() => {
  const { todo } = useContext(Context)
  const { user } = useContext(Context)
  const id = localStorage.getItem('id')
  const [text, setText] = useState('')
  const [bool, setBool] = useState(false)

  const addTodo = async () => {
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


  console.log(bool)
  useEffect(() => {
    getTodos(id).then(data => todo.setTodo(data))
  }, [bool])

  useEffect(() => {
    check().then(data => {
      user.setAuth(true)
    })
  }, [])
  
  return (
    <div>
      {user.isAuth === true ? (<div className="wrapper"> <div className="task-input">
        <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
        <button className='add-btn' onClick={() => addTodo()}>Add</button>
      </div>
        <ul className="task-box">
          {todo.todo.map(el => (
            <Task setBool={setBool} key={el.id} todoItem={el} id={el.id} />
          ))}
        </ul></div>) : (<div>Пожалуйста Войдите</div>)}
    </div>
  )
})


export default Main

{/* <button className='add-btn' onClick={()=> handleClick(1)}>Clear All</button> */ }
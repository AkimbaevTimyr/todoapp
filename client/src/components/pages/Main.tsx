import { useContext, useEffect, useState, FC } from 'react'
import Task from '../Task'
import { addTodos, } from '../../http/taskApi';
import { getTodos } from '../../http/taskApi';
import Login from '../Login';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTodo } from '../../store1/reducers/TodoActionCreator';

const Main: FC = () => {
  const {todos} = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const {isAuth} = useAppSelector(state => state.users)
  const id = localStorage.getItem('id')
  const [text, setText] = useState('')
  const [bool, setBool] = useState(false)
  const addTodo = async (e: any) => {
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
    getTodos(id).then(data => dispatch(setTodo(data)))
  }, [bool])
  return (
    <div>
      {isAuth === true ? (<div className="wrapper">
        <form onSubmit={(e)=> addTodo(e) }>
          <div className="task-input">
            <input value={text || ''} type="text" onChange={(e) => setText(e.target.value)} placeholder="Add a new task" />
            <button type='submit' className='add-btn'>Add</button>
          </div>
      </form>
      <ul className="task-box">
          {todos.map((el: any, index: any) => (
            <Task key={index} todoItem={el}  />
          ))}
        </ul></div>) : (<Login />)}
    </div>
  )
}

export default Main;



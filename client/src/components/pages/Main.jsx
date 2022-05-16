import React, { useContext,useState } from 'react'
import { Context } from '../..'
import Task from '../Task'
import { addTodos, deleteAllTodo } from '../../http/taskApi';
import { observer } from 'mobx-react-lite'

const Main = observer(() =>{
    const {user} = useContext(Context)
    const {todo} = useContext(Context)
    const [text, setText] = useState('')
    const addTodo = () =>{
      if(text){
          const todo ={
            todoid: Date.now(),
            text,
            user_id: 1
        }
        setText('')
        addTodos(todo)
      }else{
        alert('Введите пожалуйста текст')
      }
    }
    const handleClick = (id) =>{
      deleteAllTodo(id)
    }
    return(
    <div className="wrapper">
      {user.isAuth === true ? 'da' : 'net'}
      <div  className="task-input">
        <input value={text} type="text" onChange={(e)=> setText(e.target.value)} placeholder="Add a new task" />
        <button className='add-btn' onClick={addTodo}>Add</button>
        <button className='add-btn' onClick={()=> handleClick(1)}>Clear All</button>
      </div>
      <ul className="task-box">
         {todo.todo.map(el =>(
             <Task todoItem={el} id={el.id} />
         ))}
      </ul>
    </div>
    )
})


export default Main
import { observer } from 'mobx-react-lite'
import React, {useContext, useEffect, useState}from 'react'
import { Context } from '..'
import { deleteTodo } from '../http/taskApi'
import { getTodos } from '../http/taskApi'

const Task = observer(({ todoItem}) => {
    const [bool, setBool] = useState(false)
    const {todo} = useContext(Context)
    const id = localStorage.getItem('id')

    useEffect(() => {
        getTodos(id).then(data => todo.setTodo(data))
    }, [bool])

    const handleClick =  async (id) => {
        setBool(true)
        if (id) {
            await deleteTodo(id)
        } else {
            alert('Не найден id')
        }
        setBool(false)
    }

    return (
        <li className="task">
            <p>{todoItem.text}</p>
            <div className='delete' onClick={() => handleClick(todoItem.todoid)}></div>
        </li>
    )
})

export default Task
import { observer } from 'mobx-react-lite'
import React from 'react'
import { deleteTodo } from '../http/taskApi'


const Task = observer(({ todoItem }) => {
    const handleClick = (id) => {
        deleteTodo(id)
    }
    // onClick={ handleClick(todoItem.todoid)
    return (
        <li class="task">
            <p>{todoItem.text}</p>
            <div className='delete' onClick={()=> handleClick(todoItem.todoid)}></div>
        </li>
    )
})

export default Task
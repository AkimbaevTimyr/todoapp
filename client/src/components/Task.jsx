import { observer } from 'mobx-react-lite'
import React from 'react'
import { deleteTodo } from '../http/taskApi'


const Task = observer(({todoItem}) => {
    const handleClick = (id) =>{
        deleteTodo(id)
    }
    return (
        <li class="task">
            <label for="">
                <input  type="checkbox" onClick={ handleClick(todoItem.todoid) } />
                    <p class="">{todoItem.text}</p>
            </label>
            <div>123</div>
        </li>
    )
})

export default Task
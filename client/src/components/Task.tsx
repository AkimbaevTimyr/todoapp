import { useEffect, useState, FC}from 'react'
import { useAppDispatch } from '../hooks/redux'
import { deleteTodo } from '../http/taskApi'
import { getTodos } from '../http/taskApi'
import { setTodo } from '../store/reducers/TodoActionCreator'
import { ITodoItem } from '../types/todo'

interface TaskProps {
    todoItem: ITodoItem;
}

const Task: FC<TaskProps> = ({todoItem}) => {
    const dispatch = useAppDispatch()
    const [bool, setBool] = useState<boolean>(false)
    const id = localStorage.getItem('id')
    useEffect(() => {
        getTodos(id).then(data =>dispatch(setTodo(data)))
    }, [bool])
    const handleClick =  async (id: Date) => {
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
}

export default Task
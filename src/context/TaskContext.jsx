import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks';

export const TaskContext = createContext() //nombre del contexto

export function TaskContextProvider(props) { //este es el componente que va a englobar a todos

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        setTasks(data)
    },[])

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            descriptio: task.description
        }]) 
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const obj = {
        tasks,
        deleteTask,
        createTask
    }

    return (
        <TaskContext.Provider value={obj}>
            {props.children}
        </TaskContext.Provider>
    )
}   

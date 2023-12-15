"use client"
//release1
import { createContext, useContext, useState } from "react";
import {v4 as uuid} from 'uuid'

export const TaskContext = createContext()


export const useTasks = () => {

    const context = useContext(TaskContext)
    if (!context) throw new Error('usetaksmust use inside provider')
    return context
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'myfirst task',
        description: 'some task'
    },
    {
        id: 2,
        title: 'second task',
        description: '2 task'
    },
    {
        id: 3,
        title: 'thrid task',
        description: '3 task'
    },
    ])



    const createTask = (title, description) => {
      setTasks(  [...tasks, { title, description, id: uuid() }])
    }

     const deleteTask = (id) => {

        /* [...tasks]
        // copia todo lo que tenemos del arreglo de tareas*
        //* [...tasks.filter]
        // copia todo lo que tenemos del arreglo de tareas con un flitrado de datos*/
        //* [...tasks.filter(task=>(task.id !== id))]
        // copia todo lo que tenemos del arreglo de tareas con un flitrado de datos, que por cada terea que recorra buscar la propiedad id y es diferente al id dado entonces no lo añadas en el nuevo arreglo*/

        
        
setTasks(//con esta le dices establece esas tareas con set
[...tasks.filter(task=>(task.id !== id))] // esta hace un recorrido de tareas pero sin la tarea que estamos buscando entonces ==> añade las tareas que no contengan el id dado
)
        }

    return <TaskContext.Provider
        value={{ 
            tasks,
        createTask,
        deleteTask
        }}>
        {children}
    </TaskContext.Provider>

}


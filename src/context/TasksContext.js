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
    const [tasks, setTasks] = useState([
    ])



    const createTask = (title, description) => {
      setTasks(  [...tasks, { title, description, id: uuid() }])
    }

     

        /* [...tasks]
        // copia todo lo que tenemos del arreglo de tareas*
        //* [...tasks.filter]
        // copia todo lo que tenemos del arreglo de tareas con un flitrado de datos*/
        //* [...tasks.filter(task=>(task.id !== id))]
        // copia todo lo que tenemos del arreglo de tareas con un flitrado de datos, que por cada terea que recorra buscar la propiedad id y es diferente al id dado entonces no lo añadas en el nuevo arreglo*/

        
        //con esta le dices establece esas tareas con set
const deleteTask = (id) => setTasks([...tasks.filter((task)=>task.id !== id)]); // esta hace un recorrido de tareas pero sin la tarea que estamos buscando entonces ==> añade las tareas que no contengan el id dado

 const updateTask = (id, newData)=>       {
    setTasks([...tasks.map(task=>task.id === id ?{...task,...newData} : task)])
    
 }

    return <TaskContext.Provider
        value={{ 
            tasks,
        createTask,
        deleteTask,
        updateTask
        }}>
        {children}
    </TaskContext.Provider>

}


"use client"

import { createContext, useContext, useState } from "react";

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
      setTasks(  [...tasks, { title, description, id: 10 }])
    }
    return <TaskContext.Provider
        value={{ 
            tasks,
        createTask 
        }}>
        {children}
    </TaskContext.Provider>

}


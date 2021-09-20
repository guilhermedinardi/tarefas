import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskCompleted, handleTaskDeleted }) => {
    console.log(tasks)
    return(
        <>
            {tasks.map(task => ( 
                <Task task={task} handleTaskCompleted={handleTaskCompleted} handleTaskDeleted={handleTaskDeleted}/>
            ))}
        </>
    )
}
export default Tasks
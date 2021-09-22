import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Header from './components/Header'
import TaskAdd from './components/TaskAdd'
import Tasks from './components/Tasks'
import TaskDetails from './components/TaskDetails'

const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid #563d67;
  padding: 30px;
  border-radius: 10px;
`

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchApi = async () =>{
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }

    fetchApi()
  }, [])

  const handleTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) 
        return { 
          ...task, 
          completed: !task.completed 
        }
        
      return task
    }) 
    setTasks(newTasks)
  }

  const handleTaskAdded = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ]
    setTasks(newTasks)
  }

  const handleTaskDeleted = (taskId) => {
    const newTasks = tasks.filter((task) => (task.id !== taskId))
    setTasks(newTasks)
  }

  return (
    <Router>
      <Container>
        <Header />
        <Route 
          path='/'
          exact
          render={() => (
            <>
              <TaskAdd handleTaskAddition={handleTaskAdded}/>
              <Tasks 
                tasks={tasks} 
                handleTaskCompleted={handleTaskCompleted} 
                handleTaskDeleted={handleTaskDeleted}
              />
            </>  
          )}
        />
        <Route path='/:taskTitle' exact component={TaskDetails}></Route>
      </Container>
    </Router>
  )
}

export default App
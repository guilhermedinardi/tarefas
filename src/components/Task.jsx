import React from 'react';
import styled from 'styled-components';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import Button from './Button'

const TaskContainer = styled.div `
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
`

const Title = styled.h4`
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Task = ({ task, handleTaskCompleted, handleTaskDeleted }) => {
    const history = useHistory()

    const handleTaskDetailClick = () => {
        history.push(`/${task.title}`)
    }

    return ( 
        <TaskContainer style={task.completed ? { borderLeft: '6px solid #563d67' } : {}}>
            <Title onClick={() => handleTaskCompleted(task.id)} >
                {task.title}
            </Title>
            <ButtonContainer>
                <Button onClick={handleTaskDetailClick}>
                    <CgInfo/>
                </Button>
                <Button onClick={() => handleTaskDeleted(task.id)}>
                    <CgClose/>
                </Button>
            </ButtonContainer>
        </TaskContainer> 
    )
}
 
export default Task;
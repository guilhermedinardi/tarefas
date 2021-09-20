import React from 'react';
import styled from 'styled-components';
import { CgClose, CgInfo } from 'react-icons/cg'

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
/* const Button = styled.button`
    border: none;
    font-style: 10px;
    color: #563D67;
    cursor: pointer;
    margin-left: 10px;
` */

const Task = ({ task, handleTaskCompleted, handleTaskDeleted }) => {
    return ( 
        <TaskContainer style={task.completed ? { borderLeft: '6px solid #563d67' } : {}}>
            <Title onClick={() => handleTaskCompleted(task.id)} >
                {task.title}
            </Title>
            <ButtonContainer>
                <Button>
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
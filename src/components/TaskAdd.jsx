import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'

const AddTaskContainer = styled.div`
    margin: 15px 0;
    width: 100%;
    display: flex;
`
const AddButtonContainer = styled.div`
    margin-left: 10px;
    flex: 1;
`

const AddTaskInput = styled.input `
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    flex: 2;
    background-color: #444;
    font-size: 16px;
    color: #eee;
`

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <AddTaskContainer>
            <AddTaskInput 
            onChange={handleInputChange}
            value={inputData}
            type='text'/>
            <AddButtonContainer>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </AddButtonContainer>
        </AddTaskContainer>
     )
}
 
export default AddTask;

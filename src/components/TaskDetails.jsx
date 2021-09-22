import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'


const Button = styled.button`
    width: 30%;
    margin-top: 10px;
    background-color: #563d67;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: #eee;
    &:hover{
        background-color: #eee;
        color: #563d67;
    }
`

const DetailContainer = styled.div ` 
    display: flex;
    flex-direction: column;
    color: #eee;
    background-color: #444;
    margin: 15px 0;
    padding: 15px 20px;
    border-radius: 5px;
`

const Title = styled.h2`
    font-size: 25px;
    font-weight: 600;
`

const Description = styled.p`
    font-size: 16px;
`

const TaskDetails = () => {
    const params = useParams()

    const history = useHistory()

    const handleTaskButtonBack = () => {
        history.goBack()
    } 
    
    return (
        <>
            <Button onClick={handleTaskButtonBack}>Voltar</Button>
            <DetailContainer>
                <Title>{params.taskTitle}</Title>
                <Description> Lorem ipsum lorem ipsum</Description>
            </DetailContainer>
        </>
    );
}
 
export default TaskDetails;
import React from 'react'
import styled from 'styled-components'

const AddButton = styled.button`
    background-color: #563d67;
    height: 40px;
    width: 95%;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: #eee;
    margin-left: 10px;
    &:hover{
        background-color: #eee;
        color: #563d67;
    }
`

const Button = ({ children, onClick }) => {
    return (  
        <AddButton onClick={onClick}>
            {children}
        </AddButton>
    );
}

export default Button;
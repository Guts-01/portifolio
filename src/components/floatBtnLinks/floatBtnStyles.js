import styled from "styled-components";

export const DivFloatBtn = styled.div`
    display: flex;  
    width: 60px;
    position: fixed;
    padding: 5px;
    top: 20px;
    right: 20px;
    display: flex;
    background-color: #a5a5a5;
    border-radius: 10px;
    flex-direction: column;
    z-index: 1000;
    gap: 10px;
    `;

export const LinkFloatBtn = styled.a`
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
    `;
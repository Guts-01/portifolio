import styled from "styled-components";

export const DivFloatBtn = styled.div`
    display: flex;  
    width: 60px;
    position: fixed !important;
    padding: 5px;
    top: 20px;
    right: 20px;
    display: flex;
    background-color: #a5a5a5;
    border-radius: 10px;
    flex-direction: column;
    z-index: 1000;
    gap: 10px;
    @media (max-width: 1024px) and (min-width: 800px) {
        top: 78%;
        right: 86%;
    }
   @media (max-width: 768px) {
        top: 78%;
        right: 86%;

    }
    `;

export const LinkFloatBtn = styled.a`
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
    `;
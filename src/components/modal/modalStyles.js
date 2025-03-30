import styled from 'styled-components';
// ===========================================
//              Modal Easter egg
// ===========================================

export const ModalEasterEgg = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: transparent;
    color: #a5a5a5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.5s;
`;

export const ConteinerEasterEgg = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--corHome);
    width:300px;
    height: 450px;
    transition: 0.5s;
    border-radius: 20px;
    border: 2px solid #303030;
    gap: 20px;
    padding: 10px 20px;
`;

export const DivCloseModal = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const BtnCloseModal = styled.button`
    color: #303030;
    background-color:transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: scale(1.3);
    }
`;

export const DivrenderContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: var(--fontPrincipal);
`;

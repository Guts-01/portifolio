
import styled from "styled-components";


export  const FormContainer = styled.form`
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    text-align: center;
    color: var(--corTexto);
    font-family: var(--fontPrincipal);
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid var(--corSectionsLinks);
    border-radius: 5px;
    outline: none;
    background-color:var(--corSectionsLinks);
    color: var(--corTexto);

&:focus {
    border: 1px solid #0077b5;
}`;

export const Label = styled.label`
    color: var(--corTexto);
    font-size: 1rem;
    font-family: var(--fontPrincipal);
    text-align: left;
`;

export const Textarea = styled.textarea`
    padding: 10px;
    font-size: 1rem;
    color: var(--corTexto);
    border: 1px solid var(--corSectionsLinks);
    border-radius: 5px;
    max-height: 120px;
    min-height: 120px;
    max-width: 100%;
    min-width: 100%;
    outline: none;
    background-color:var(--corSectionsLinks);

&:focus {
    border: 1px solid #0077b5;
}
`;

export const Button = styled.button`
display: inline-block;
    background-color:red;
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px;
    transition: 0.2s ease-in;
&:hover {
    transform: scale(1.1);
}
`;

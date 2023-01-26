import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    color: #ffffff;
    background-color: #008080;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:active {
        outline: auto;
    }

    &:hover {
        background-color: #008080dd;
        transform: scale(1.1);
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px;

    &:focus {
        border: 1px solid #000000;
        border-radius: 2px;
    }
`;
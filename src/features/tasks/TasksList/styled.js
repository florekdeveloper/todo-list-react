import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
    font-size: large;
    color: teal;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 1px solid rgb(245, 235, 235);
    padding: 12px;
    padding-left: 0;

    ${({hidden}) => hidden && css`
        display: none; 
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    border-style: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    ${({toggleDone}) => toggleDone && css`
        color: white;
        background: green;

        &:hover {
            cursor: pointer;
            background: rgb(37, 167, 37);
        }
    `}

    ${({remove}) => remove && css`
        background-color: firebrick;
        color: white;

        &:hover {
            cursor: pointer;
            background-color: rgb(222, 69, 69);
        }
    `}
`;
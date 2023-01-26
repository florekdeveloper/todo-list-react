import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background-color: white;
    padding: 0;
    border-radius: 2px;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    border-bottom: 1px solid #eee;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 25px;
    color: #3c3c3c;
    margin: 0;
`;
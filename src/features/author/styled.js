import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 5px 5px 10px #aab;
  padding: 5px;
`;

export const Paragraph = styled.p`
  padding: 20px;
  line-height: 1.5;

`;
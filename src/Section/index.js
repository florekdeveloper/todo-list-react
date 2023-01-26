import { Wrapper, Header, Title } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper className="section">
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        {body}
        
    </Wrapper>
);

export default Section;
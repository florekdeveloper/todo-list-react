import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Marcin Florek"
                body={
                  <>nana</>
                }
            />
        </Container>
    ); 
};

export default Author;
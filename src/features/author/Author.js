import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Wrapper, Image, Paragraph } from "./styled";
import image from "./marcin.jpg";

const Author = () => {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Marcin Florek"
                body={
                    <Wrapper>
                        <Image
                            width={200}
                            height={200}
                            src={image}
                            alt="Zdjecie Marcin"
                        />
                        <Paragraph>
                            <strong>Witam i pozdrawiam wszystkich którzy tutaj zajrzeli 😉</strong><br /><br />
                                    Mam na imię Marcin i pochodze z Poznania. Wiele lat mieszkałem w Anglii, zajmowałem się wieloma rzeczami
                                    od inżynierii poprzez zarządzanie i swoją działalność. Programowanie zawsze mnie interesowało ale nigdy nic w tym kierunku nie zrobiłem.
                                    <br /><br />W zeszłym roku zamieszkałem w Polsce i zapisałem się na kurs programowania w Szkole internetowej <strong>YouCode</strong>.
                                    <br /><br />Ta aplikacja jest elementem tego kursu, sporo nauki ale satysfakcja gwarantowana 😃
                        </Paragraph>
                    </Wrapper>
                }
            />
        </Container>
    );
};

export default Author;
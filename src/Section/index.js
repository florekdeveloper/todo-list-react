import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="container">
        <header className="section__header">
            <h2 className="subHeader">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>

    </section >
);

export default Section;
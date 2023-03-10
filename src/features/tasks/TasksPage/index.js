import Form from "../Form";
import TasksList from "../TasksList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";
import hello, { name } from "../../../utils/hello";

hello();
console.log(name);

const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;
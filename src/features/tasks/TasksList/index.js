import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
    <List>
        {tasks.map((task) => (
            <Item 
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleDone
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
    )
};

export default TasksList;
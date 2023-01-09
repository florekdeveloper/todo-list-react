import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="task">
        {tasks.map(task => (
            <li key={task.id}
                className={`task__item{
                task.done && hideDoneTasks
                 ? " task__item--hidden"
                 : ""}`
                }
            >
                <button className="button__done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`{task.done ? "task__item--lineThrough" : ""}`
                }>
                    {task.content}
                </span>
                <button className="button__remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;
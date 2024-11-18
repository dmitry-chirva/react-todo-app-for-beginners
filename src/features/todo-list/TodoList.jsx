import TodoItem from "./components/todo-item/TodoItem";
import Toggle from "../../shared/components/Toggle";


// import { useTodoStore } from "../../store/useTodoStore";
import { useTodoStore } from "../../todoprovider/TodoProvider";

export default function TodoList() {
    const {
        getFilteredTodos,
        updateTodo,
        removeTodoById,
        isAllCompleted,
        toggleCompleteAllTodos,
    } = useTodoStore();

    const todos = getFilteredTodos(); // Get filtered todos

    const handleUpdateTodo = (todo) => {
        updateTodo(todo);
    };

    const handleRemoveTodo = (id) => {
        removeTodoById(id);
    };

    const handleToggleCompleteAllTodos = ({ target }) => {
        toggleCompleteAllTodos(target.checked);
        console.log("Target: ", target);
    };

    return (
        <>
            <Toggle isChecked={isAllCompleted()} onChange={handleToggleCompleteAllTodos} />
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        value={todo}
                        onChange={handleUpdateTodo}
                        onRemove={handleRemoveTodo}
                    />
                ))}
            </ul>
        </>
    );
}

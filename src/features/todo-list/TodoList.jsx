import React from "react";
import TodoItem from "./components/todo-item/TodoItem";
import Toggle from "../../shared/components/Toggle";
import { useTodoStore } from "../../store/useTodoStore";

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

    const handleToggleCompletedAllTodos = ({ target }) => {
        toggleCompleteAllTodos(target.checked);
    };

    return (
        <>
            <Toggle isChecked={isAllCompleted()} onChange={handleToggleCompletedAllTodos} />
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

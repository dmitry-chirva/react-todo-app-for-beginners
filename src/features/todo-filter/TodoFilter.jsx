import React, { useState } from "react";
import {useTodoStore} from "../../store/useTodoStore";

export default function TodoFilter () {
    const {
        getUncompletedTodos,
        clearCompleteAllTodos,
    } = useTodoStore();

    const todos = getUncompletedTodos();

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.length}</strong> item left</span>

            <ul className="filters">
                <li><a>All</a></li>
                <li><a>Active</a></li>
                <li><a>Completed</a></li>
            </ul>

            <button className="clear-completed" onClick={clearCompleteAllTodos}>
                Clear completed
            </button>
        </footer>
    )
}

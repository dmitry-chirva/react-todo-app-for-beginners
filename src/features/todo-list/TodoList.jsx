import React, { useState } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import Toggle from "../../shared/components/Toggle";

import {useTodoStore} from "../../store/useTodoStore";

export default function TodoList () {
   const {
       todos,
       updateTodo,
       removeTodoById,
       isAllCompleted,
       toggleCompleteAllTodos
   } = useTodoStore();

   const handleUpdateTodo = (todo) => {
       updateTodo(todo);
   }

    const handleRemoveTodo = (id) => {
        removeTodoById(id);
    }

    const handleToggleCompletedAllTodos = ({target}) => {
        toggleCompleteAllTodos(target.checked);
    }

    return (
        <ul className="todo-list">
            <Toggle isChecked={isAllCompleted()} onChange={handleToggleCompletedAllTodos}/>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id}
                              value={todo}
                              onChange={handleUpdateTodo}
                              onRemove={handleRemoveTodo}
                            />
                ))
            }
        </ul>
    )
}

/*
* 1dasdsa Test1
* 232423 Test2
* 43grgv Test4
* 5fdsfds Test5
* 62d12g ewrewr
* */

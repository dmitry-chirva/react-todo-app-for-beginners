import { createContext, useContext } from "react";
import { useTodoStore as createTodoStore } from "../store/useTodoStore";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const todoStore = createTodoStore(); // Create a single shared instance
    return (
        <TodoContext.Provider value={todoStore}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoStore = () => {
    return useContext(TodoContext);
};
import { useState, useRef } from "react";

// import { useTodoStore } from "../../store/useTodoStore";
import { useTodoStore } from "../../todoprovider/TodoProvider";

export default function AddTodos () {
    // const addTodo = useTodoStore(state => state.addTodo);
    const { addTodo } = useTodoStore();
    const [todoName, setTodoName] = useState("");
    const inputRef = useRef(null); //useRef - Task 3

    const handleChangeName = ({ target }) => {
        setTodoName(target.value);
    }

    const handleEnter = ({ code, target }) => {
        if(code === 'Enter' && target.value) {
            addTodo(target.value);
            setTodoName("");

            inputRef.current?.focus(); //useRef - Task 3
        }
    }

    return (
        <input ref={inputRef} //useRef - Task 3
               className="new-todo"
               type="text"
               placeholder="What needs to be done ?"
               onChange={handleChangeName}
               onKeyDown={handleEnter}
               value={todoName}
               autoFocus/>
    )
}
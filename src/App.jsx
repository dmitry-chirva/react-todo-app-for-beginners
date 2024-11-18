import Header from "./layout/Header";
import AddTodos from "./features/add-todos/AddTodos";
import TodoList from "./features/todo-list/TodoList";
import TodoFilter from "./features/todo-filter/TodoFilter";

import { TodoProvider } from "./todoprovider/TodoProvider";

function App() {
    return (
        <TodoProvider>
        <div className="todoapp">
            <Header>
                <AddTodos/>
            </Header>
            <main className="main">
                <TodoList/>
            </main>
            <TodoFilter />
        </div>
        </TodoProvider>
    )
}

export default App;
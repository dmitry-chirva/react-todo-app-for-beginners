import Header from "./layout/Header";
import AddTodos from "./features/add-todos/AddTodos";
import TodoList from "./features/todo-list/TodoList";
import TodoFilter from "./features/todo-filter/TodoFilter";

function App() {
    return (
        <div className="todoapp">
            <Header>
                <AddTodos/>
            </Header>
            <main className="main">
                <TodoList/>
            </main>
            <TodoFilter />
        </div>
    )
}

export default App;
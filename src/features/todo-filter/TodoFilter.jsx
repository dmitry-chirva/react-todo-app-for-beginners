// import { useTodoStore } from "../../store/useTodoStore";
import { useTodoStore } from "../../todoprovider/TodoProvider";

export default function TodoFilter() {
    const {
        clearCompleteAllTodos,
        setFilter,
        filter,
        todos,
    } = useTodoStore();
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    
    const uncompletedCount = todos.filter(todo => !todo.isCompleted).length;

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{uncompletedCount}</strong> item{uncompletedCount !== 1 ? 's' : ''} left
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={filter === 'All' ? 'selected' : ''}
                        onClick={() => handleFilterChange('All')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="#/active"
                        className={filter === 'Active' ? 'selected' : ''}
                        onClick={() => handleFilterChange('Active')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="#/completed"
                        className={filter === 'Completed' ? 'selected' : ''}
                        onClick={() => handleFilterChange('Completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleteAllTodos}>
                Clear completed
            </button>
        </footer>
    );
}

import {useState, useEffect} from "react";

/* TODO add focus for field after set edit mode */
export default function TodoItem({
    value,
    onChange = () => {},
    onRemove = () => {}
}) {
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [info, setInfo] = useState({
        id: null,
        label: "",
        isCompleted: false
    });

    const todoItemStyle = `${info.isCompleted ? 'completed' : ''} ${isEditingMode ? 'editing' : ''}`

    useEffect(() => {
        if(value) {
            setInfo(value)
        }
    }, [value]);

    const handleToggleTodos = ({target}) => {
        const newInfo = {
            ...info,
            isCompleted: target.checked
        }

        setInfo(newInfo);
        onChange(newInfo);
    }

    const handleRemoveTodo = () => {
        onRemove(info?.id);
    }

    const handleChangeTodo = ({code}) => {
        if(!code || code && code === 'Enter') {
            onChange(info);
            handleDisabledMode();
        }
    }

    const handleUpdateTodoName = ({target}) => {
        const newInfo = {
            ...info,
            label: target.value
        }

        setInfo(newInfo);
    }

    const handleEditingMode = () => {
        setIsEditingMode(true);
    }

    const handleDisabledMode = () => {
        setIsEditingMode(false);
    }

    return (
        <li className={todoItemStyle}
        onDoubleClick={handleEditingMode}>
            <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked={info?.isCompleted}
                       onChange={handleToggleTodos}
                />
                <label>{info?.label}</label>
                <button className="destroy" onClick={handleRemoveTodo}/>
            </div>
            <input className="edit"
                   value={info?.label}
                   onChange={handleUpdateTodoName}
                   onKeyDown={handleChangeTodo}
                   onBlur={handleDisabledMode}
            />
        </li>
    )
}

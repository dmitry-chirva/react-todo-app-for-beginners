import React from 'react';

export default function Toggle ({
    isChecked = false,
    onChange = () => {}
}) {
    return (
        <>
            <input
                id="todoAll"
                className="toggle-all"
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                alt='Toggle all todos'
            />
            <label htmlFor="todoAll">Toggle</label>
        </>
    )
}

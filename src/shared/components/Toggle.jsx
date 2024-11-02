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
            />
            <label htmlFor="todoAll">Toggle</label>
        </>
    )
}

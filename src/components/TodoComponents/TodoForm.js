import React from "react";

const TodoForm = props => {
    console.log('TodoForm props', props);
    return (
        <>
        <input type="text"/>
        <button>Add todo</button>
        <button>Clear completed todos</button>
        </>
    )
}

export default TodoForm;
import React from "react";

const Todo = props => {
    console.log('Todo props', props)
    return (
        <div
        className={`${props.todo.completed ? 'completed-todo' : ''}`}
        onClick={() => props.toggleTodo(props.todo.id)}
        >
            <p>{props.task}</p>
        </div>
    )
}

export default Todo;
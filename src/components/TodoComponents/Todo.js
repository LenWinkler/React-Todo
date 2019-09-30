import React from "react";

const Todo = props => {
    console.log('Todo props', props)
    return (
        <div>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log('TodoList props', props)
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo key={item.id} task={item.task}/>
            ))}
        </div>
    )
}

export default TodoList;
import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('form props', this.props)
        this.state ={
            task: ''
        }
    }

    render() {
        return (
                    <form onSubmit={this.props.submitTodo}>
                        <input 
                            type="text" 
                            name="task"
                            value={this.task}
                            onChange={this.props.handleChanges}
                        />
                        <button type="submit">Add todo</button>
                        <button onClick={this.props.removeCompletedTodos}>Clear completed todos</button>
                    </form>
                )
    }
}

// const TodoForm = props => {
//     console.log('TodoForm props', props)
//     return (
//         <form onSubmit={props.addTodo()}>
//             <input 
//                 type="text" 
//                 name="todo"
//                 onChange={props.handleChanges}
//             />
//             <button type="submit">Add todo</button>
//             <button>Clear completed todos</button>
//         </form>
//     )
//     }


export default TodoForm;
import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todos = [{
  task: 'Create a todo list app',
  id: 1,
  completed: false
},

{
  task: 'Add basic functionality',
  id: 2,
  completed: false
}

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    console.log('state todos', this.state.todos)
  }

  addTodo = todoTitle => {
    const newTodo = {
      task: todoTitle,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    },
    console.log(this.state)
    )
};

  submitTodo = e => {
    e.preventDefault();
    this.addTodo(this.state.task);
};

  toggleTodo = id => {
    console.log('toggle id', id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  };

  removeCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Len's Todo App</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo} handleChanges={this.handleChanges} submitTodo={this.submitTodo} removeCompletedTodos={this.removeCompletedTodos} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Len's Todo App</h1>
        <TodoList todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;

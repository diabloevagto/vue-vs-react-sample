import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoDisplay from './TodoDisplay';

class Todolist extends Component {
  state = { todos: [] };

  addNewTodo = todo => {
    const { todos } = this.state;

    this.setState({
      todos: [...todos, todo]
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>todo list</h1>
        <TodoInput addNewTodo={this.addNewTodo} />
        <TodoDisplay todos={todos} />
      </div>
    );
  }
}

export default Todolist;

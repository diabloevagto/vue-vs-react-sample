import React, { Component } from 'react';

import TodoInput from './TodoInput';

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
        {todos.map(el => (
          <p key={el}>{el}</p>
        ))}
      </div>
    );
  }
}

export default Todolist;

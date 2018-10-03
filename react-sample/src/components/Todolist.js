import React, { Component } from 'react';

import TodoInput from './TodoInput';

class Todolist extends Component {
  render() {
    return (
      <div>
        <h1>todo list</h1>
        <TodoInput />
      </div>
    );
  }
}

export default Todolist;

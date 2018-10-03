import React, { Component } from 'react';

class TodoDisplay extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </div>
    );
  }
}

export default TodoDisplay;

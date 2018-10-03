import React, { Component } from 'react';
import styled from 'styled-components';

const Display = styled.div`
  h1 {
    color: green;
  }
  p {
    color: red;
  }
`;

class TodoDisplay extends Component {
  render() {
    const { todos } = this.props;
    return (
      <Display>
        <h1>all todos</h1>
        {todos.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </Display>
    );
  }
}

export default TodoDisplay;

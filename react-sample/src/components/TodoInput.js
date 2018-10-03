import React, { Component } from 'react';

class Todolist extends Component {
  state = {
    context: ''
  };

  render() {
    const { context } = this.state;
    return (
      <div>
        <input
          value={context}
          onChange={e => this.setState({ context: e.target.value })}
        />
      </div>
    );
  }
}

export default Todolist;

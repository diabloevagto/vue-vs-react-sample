import React, { Component } from 'react';

class Todolist extends Component {
  state = {
    context: ''
  };

  onClick = () => {
    const { context } = this.state;

    console.log(context);
  };

  render() {
    const { context } = this.state;
    return (
      <div>
        <input
          value={context}
          onChange={e => this.setState({ context: e.target.value })}
        />
        <button onClick={this.onClick}>新增</button>
      </div>
    );
  }
}

export default Todolist;

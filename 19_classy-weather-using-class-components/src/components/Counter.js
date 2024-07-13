import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }

  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
          <button onClick={this.handleIncrement}>-</button>
        </span>
      </div>
    );
  }
}

export default Counter;

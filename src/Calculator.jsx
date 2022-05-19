import React, { Component } from 'react';
import History from './History.jsx';
import Grid from './Grid.jsx';

function onDigit(digit) {
  const old = this.state.new;
  if (old === '0') {
    this.setState({
      new: `${digit}`,
    });
  } else {
    this.setState({
      new: `${old}${digit}`,
    });
  }
}

function onDot() {
  const old = this.state.new;
  const re = /^[^.]+$/;
  if (re.test(old)) {
    this.setState({
      new: `${old}.`,
    });
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old: '',
      new: '0',
    };
    this.onDotHandler = onDot.bind(this);
    this.onDigitHandler = onDigit.bind(this);
  }

  render() {
    const { old, new: newer } = this.state;
    return (
      <div id="calc" className="border font-mono bg-amber-900 bg-opacity-25 rounded-lg">
        <History old={old} new={newer} />
        <Grid onDigit={this.onDigitHandler} onDot={this.onDotHandler} />
      </div>
    );
  }
}

export default Calculator;

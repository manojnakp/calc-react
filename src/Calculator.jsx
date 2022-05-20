import React, { Component } from 'react';
import History from './History.jsx';
import Grid from './Grid.jsx';

const clearOld = () => ({ old: '' });

function onDigit(digit) {
  const old = this.state.new;
  const state = clearOld();
  if (this.state.old) {
    state.new = `${digit}`;
  } else if (old === '0') {
    state.new = `${digit}`;
  } else {
    state.new = `${old}${digit}`;
  }
  this.setState(state);
}

function onDot() {
  const old = this.state.new;
  const re = /\d+\.(\d+)?$/;
  const state = clearOld();
  if (!re.test(old)) {
    state.new = `${old}.`;
  }
  this.setState(state);
}

function onBackSpace() {
  const modified = this.state.new.slice(0, -1);
  const state = clearOld();
  if (modified) {
    state.new = `${modified}`;
  } else {
    state.new = '0';
  }
  this.setState(state);
}

function onOperator(op) {
  const old = this.state.new;
  const re = /[/*+-]/;
  const state = clearOld();
  if (re.test(old.slice(-1))) {
    state.new = `${old.slice(0, -1)}${op}`;
  } else {
    state.new = `${old}${op}`;
  }
  this.setState(state);
}

function onClear() {
  this.setState({
    old: '',
    new: '0',
  });
}

function onEquals() {
  const old = this.state.new;
  const input = /[/*+-]/.test(old.at(-1)) ? old.slice(0, -1) : old;
  this.setState({
    old: `${input}=`,
    /* eslint-disable-next-line no-eval */
    new: `${eval(input)}`,
  });
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
    this.onBsHandler = onBackSpace.bind(this);
    this.onOperator = onOperator.bind(this);
    this.onClear = onClear.bind(this);
    this.onEquals = onEquals.bind(this);
  }

  render() {
    const { old, new: newer } = this.state;
    return (
      <div id="calc" className="border font-mono bg-stone-50 shadow-md rounded-lg">
        <History old={old} new={newer} />
        <Grid
          onDigit={this.onDigitHandler}
          onDot={this.onDotHandler}
          onBackSpace={this.onBsHandler}
          onOperator={this.onOperator}
          onClear={this.onClear}
          onEquals={this.onEquals}
        />
      </div>
    );
  }
}

export default Calculator;

import React, { Component } from 'react';
import History from './History.jsx';
import Grid from './Grid.jsx';

const clearOld = () => ({ old: '' });

function onDigit(digit) {
  const { now } = this.state;
  const old = now.new;
  const state = clearOld();
  let flag = true;
  if (now.old || old === '0') {
    flag = false;
  }
  if (digit === '%') {
    flag = true;
  }
  if (flag) {
    state.new = `${old}${digit}`
  } else {
    state.new = `${digit}`;
  }
  this.setState({ now: state });
}

function onDot() {
  const { now } = this.state;
  const old = now.new;
  const re = /\d+\.(\d+)?$/;
  const state = clearOld();
  if (!re.test(old)) {
    state.new = `${old}.`;
  }
  this.setState({ now: state });
}

function onBackSpace() {
  const { now } = this.state;
  const old = now.new;
  const modified = old.slice(0, -1);
  const state = clearOld();
  if (modified) {
    state.new = `${modified}`;
  } else {
    state.new = '0';
  }
  this.setState({ now: state });
}

function onOperator(op) {
  const { now } = this.state;
  const old = now.new;
  const re = /[/*+-]/;
  const state = clearOld();
  if (re.test(old.slice(-1))) {
    state.new = `${old.slice(0, -1)}${op}`;
  } else {
    state.new = `${old}${op}`;
  }
  this.setState({ now: state });
}

function onClear() {
  this.setState({
    now: {
      old: '',
      new: '0',
    },
  });
}

function onEquals() {
  const { now, history } = this.state;
  const old = now.new;
  const input = /[/*+-]/.test(old.at(-1)) ? old.slice(0, -1) : old;
  /* eslint-disable-next-line no-eval */
  const output = parseFloat(eval(input.replaceAll('%', '/100')));
  const state = {
    old: `${input}=`,
    new: `${output.toFixed(6).replace(/\.?0*$/, '')}`,
  };
  const then = history.at(-1);
  if (then && now.old === then.old) {
    this.setState({ now: state });
  } else {
    this.setState({
      now: state,
      history: [...history, state],
    });
  }
}

function clear() {
  this.setState({ history: [] });
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      now: {
        old: '',
        new: '0',
      },
    };
    this.onDotHandler = onDot.bind(this);
    this.onDigitHandler = onDigit.bind(this);
    this.onBsHandler = onBackSpace.bind(this);
    this.onOperator = onOperator.bind(this);
    this.onClear = onClear.bind(this);
    this.onEquals = onEquals.bind(this);
    this.clearHistory = clear.bind(this);
  }

  render() {
    const { history, now } = this.state;
    return (
      <div id="calc" className="border font-mono bg-stone-50 shadow-md rounded-lg">
        <History history={history} now={now} clear={this.clearHistory} />
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

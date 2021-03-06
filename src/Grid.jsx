import React, { Component } from 'react';
import Button from './Button.jsx';

function handler(value, props) {
  const {
    onDot,
    onDigit,
    onBackSpace,
    onOperator,
    onClear,
    onEquals,
  } = props;
  if (value === 'c' || value === 'C' || value === 'Delete') {
    onClear();
    return true;
  }
  if (value === 'Backspace') {
    onBackSpace();
    return true;
  }
  if (value === '.') {
    onDot();
    return true;
  }
  if (/^\d$/.test(value)) {
    onDigit(value);
    return true;
  }
  if (value === '%') {
    onDigit(value);
    return true;
  }
  if (/[/*+-]/.test(value)) {
    onOperator(value);
    return true;
  }
  if (value === '=' || value === 'Enter') {
    onEquals();
    return true;
  }
  return false;
}

function onClick(evt) {
  const target = evt.target.closest('button');
  if (target === null) {
    return;
  }
  const { value } = target;
  const result = handler(value, this.props);
  if (result) {
    evt.preventDefault();
  }
}

function onKeyDown(evt) {
  const result = handler(evt.key, this.props);
  if (result) {
    evt.preventDefault();
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.onClick = onClick.bind(this);
    this.onKeyDown = onKeyDown.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
  }

  render() {
    const array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    return (
      <div className="grid w-[16rem] h-[20rem] text-xl sm:w-[24rem] sm:h-[25rem] grid-cols-4 gap-2 p-2 sm:text-2xl" onClick={this.onClick} role="presentation">
        <Button variant="red" value="c" key="ac">AC</Button>
        <Button variant="blue" value="%" key="op-%">%</Button>
        <Button variant="blue" value="/" key="op-/">&#247;</Button>
        <Button variant="blue" value="*" key="op-*">&times;</Button>
        <Button variant="minus" value="-" key="op--">-</Button>
        {array.map((value) => (
          <Button variant="simple" value={value} key={`d-${value}`}>{value}</Button>
        ))}
        <Button variant="simple" value="." key="dot">.</Button>
        <Button variant="simple" value="Backspace" key="backspace">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>
        </Button>
        <Button variant="plus" value="+" key="op-+">+</Button>
        <Button variant="equals" value="=" key="equals">=</Button>
      </div>
    );
  }
}

export default Grid;

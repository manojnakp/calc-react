import React, { Component } from 'react';
import Button from './Button.jsx';

class Grid extends Component {
  onClick(evt) {
    const { target } = evt;
    const { onDot, onDigit } = this.props;
    if (target.type !== 'button') {
      return;
    }
    const { value } = target;
    if (value === '.') {
      onDot();
      return;
    }
    onDigit(value);
  }

  render() {
    const array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    return (
      <div className="grid w-[16rem] h-[20rem] text-xl sm:w-[24rem] sm:h-[25rem] grid-cols-3 gap-2 p-2 sm:text-2xl" onClick={this.onClick.bind(this)}>
        {array.map((value) => (
          <Button variant="simple" value={value} key={`d-${value}`}>{value}</Button>
        ))}
        <Button variant="simple" value="." key="dot">.</Button>
      </div>
    );
  }
}

export default Grid;

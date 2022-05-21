import React from 'react';

function Button({ value, children, variant }) {
  const basic = 'shadow hover:shadow-md hover:-top-px hover:-left-px active:top-0 active:left-0 relative transition-all rounded-full focus:ring';
  const variants = {
    simple: 'hover:bg-zinc-100 bg-white',
    blue: 'hover:bg-cyan-400 bg-cyan-300',
    red: 'hover:bg-red-400 bg-red-300',
    equals: 'hover:bg-fuchsia-400 bg-fuchsia-300',
    plus: 'hover:bg-cyan-400 bg-cyan-300',
    minus: 'hover:bg-cyan-400 bg-cyan-300',
  };
  const classes = [];
  classes.push(basic);
  classes.push(variants[variant]);
  if (variant === 'minus') {
    classes.push('col-start-4 row-start-2');
  }
  if (variant === 'plus') {
    classes.push('col-start-4 row-start-3');
  }
  if (variant === 'equals') {
    classes.push('col-start-4 row-start-4 row-span-2');
  }
  return (
    <button type="button" className={classes.join(' ')} value={value}>{children}</button>
  );
}
export default Button;

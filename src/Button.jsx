import React from 'react';

function Button({ value, children, variant }) {
  const basic = 'shadow hover:shadow-md hover:-top-px hover:-left-px active:top-0 active:left-0 relative transition-all rounded-full';
  const variants = {
    simple: 'hover:bg-zinc-100 bg-white',
    operator: 'hover:bg-cyan-400 bg-cyan-300',
  };
  const cname = [basic, variants[variant]].join(' ');
  return (
    <button type="button" className={cname} value={value}>{children}</button>
  );
}
export default Button;

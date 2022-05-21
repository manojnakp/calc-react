import React, { useState } from 'react';
import Unit from './Unit.jsx';

function CloseBtn({ shown, onClick }) {
  const classes = ['h-6 w-6 mx-auto transition'];
  if (shown) {
    classes.push('rotate-180');
  }
  return (
    <button type="button" className="block mx-auto bg-white p-2 m-2 w-3/4 rounded-md" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className={classes.join(' ')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

function HList({ history }) {
  const [shown, setShown] = useState(false);
  const toggle = () => {
    setShown(!shown);
  };
  const classes = ['absolute bg-neutral-200 z-10 flex flex-col w-[80%] left-[10%] overflow-y-auto transition-all'];
  if (!shown) {
    classes.push('max-h-0');
  } else {
    classes.push('max-h-[24rem] sm:max-h-[28rem]');
  }
  const list = history.slice(0).reverse().map((item, index) => (
    /* eslint-disable-next-line react/no-array-index-key */
    <Unit item={item} key={`${item.old}i${index}`} />
  ));
  return (
    <>
      <CloseBtn shown={shown} onClick={toggle} />
      <div className={classes.join(' ')}>
        {list}
        <div className="m-2 text-center">{list.length ? '' : 'No history'}</div>
      </div>
    </>
  );
}
export default HList;

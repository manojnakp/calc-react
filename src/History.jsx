import React from 'react';
import HList from './HList.jsx';
import Output from './Output.jsx';

function History({ history, now }) {
  return (
    <div className="relative">
      <HList history={history} />
      <Output now={now} />
    </div>
  );
}

export default History;

import React from 'react';

function History({ old, new: newer }) {
  return (
    <div className="border shadow-sm bg-neutral-100 m-2 flex flex-col items-end p-2">
      <p className="text-sm h-4 sm:text-lg sm:h-6">{old}</p>
      <p className="p-2 text-xl sm:text-2xl">{newer}</p>
    </div>
  );
}

export default History;

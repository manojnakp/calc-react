import React from 'react';

function History({ old, new: newer }) {
  const older = old.replaceAll('/', '\xF7').replaceAll('*', '\xD7');
  const newest = newer.replaceAll('/', '\xF7').replaceAll('*', '\xD7');
  return (
    <div className="border shadow-sm bg-neutral-100 m-2 flex flex-col items-end p-2">
      <p className="text-sm h-4 sm:text-lg sm:h-6">{older}</p>
      <p className="p-2 text-xl sm:text-2xl">{newest}</p>
    </div>
  );
}

export default History;

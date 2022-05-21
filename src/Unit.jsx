import React from 'react';

function Unit({ item }) {
  return (
    <div className="first:border-t-0 border-t border-gray-400 flex flex-col items-end mx-2 mb-2 pt-2">
      <p className="text-sm h-4 sm:text-lg sm:h-6">{item.old}</p>
      <p className="pt-2 text-xl sm:text-2xl">{item.new}</p>
    </div>
  );
}

export default Unit;

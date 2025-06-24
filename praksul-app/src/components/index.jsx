import React from 'react';

const PertemuanMenu = ({ onSelect }) => {
  const pertemuanList = [1, 2, 3, 4];

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold mb-4">Daftar Pertemuan</h1>
      {pertemuanList.map((num) => (
        <button
          key={num}
          onClick={() => onSelect(num)}
          className="block w-full text-left px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded"
        >
          Pertemuan {num}
        </button>
      ))}
    </div>
  );
};

export default PertemuanMenu;

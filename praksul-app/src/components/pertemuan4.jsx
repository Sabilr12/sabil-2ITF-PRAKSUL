import React, { useState } from 'react';

const Pertemuan4 = () => {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState(null);

  const hitungLuas = (e) => {
    e.preventDefault();
    if (alas && tinggi) {
      setLuas(0.5 * Number(alas) * Number(tinggi));
    } else {
      setLuas(null);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-yellow-300">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">Kalkulator Luas Segitiga</h2>
      <form onSubmit={hitungLuas} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Alas (cm)</label>
          <input
            type="number"
            value={alas}
            onChange={(e) => setAlas(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tinggi (cm)</label>
          <input
            type="number"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
        >
          Hitung
        </button>
      </form>
      <div className="mt-4 text-center">
        {luas !== null ? (
          <p className="text-green-600 text-lg font-semibold">Luas = {luas} cm²</p>
        ) : (
          <p className="text-gray-500">Silakan isi alas dan tinggi</p>
        )}
      </div>
    </div>
  );
};

export default Pertemuan4;

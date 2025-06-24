import React from 'react';
import Pertemuan4 from "../Components/pertemuan4";
import Button from '../components/button';



const PraksulPage = () => {
  const handleClick = () => {
    alert("Tombol di luar form diklik!");
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center gap-6 p-4">
      <Button onClick={handleClick}>Klik Saya</Button>
      <Pertemuan4 />
    </div>
  );
};

export default PraksulPage;

import React, { useState, useEffect } from 'react';


const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className='py-4 bg-secondary text-center text-white'>&copy; Kathiravan {year}

    </div>
  )
}

export default Footer
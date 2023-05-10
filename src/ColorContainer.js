import React, { useEffect, useState } from 'react';
import ColorCard from './ColorCard';

function ColorContainer() {
  const [colors, setColors] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/colors")
      .then(response => response.json())
      .then(data => setColors(data))
  }, []);


  return (
    <div>
        {colors.map((color) => (
        <ColorCard key={color.id} color={color} />
        ))}
    </div>
  );
}

export default ColorContainer;
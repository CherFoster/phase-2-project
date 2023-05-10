import React, { useEffect, useState } from 'react';
import ColorCard from './ColorCard';

function ColorContainer() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/colors")
      .then(response => response.json())
      .then(data => setColors(data))
  }, []);

  return (
    <div>
      <h1>Color Palettes</h1>
        {colors.map(color => {
            return (
                <ColorCard key={color.id} color={color} />
            )
        })}
    </div>
  );
}

export default ColorContainer;
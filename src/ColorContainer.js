import React, { useEffect, useState } from 'react';

function ColorContainer() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch('http://www.colourlovers.com/api/colors')
      .then(response => response.json())
      .then(data => setColors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map(color => (
          <li key={color.id}>{color.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ColorContainer;
import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';

function MusicContainer() {
  const [musicList, setMusic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/musicList")
      .then(response => response.json())
      .then(data => setMusic(data))
  }, []);

  return (
    <div id='saved'>
    <p>My saved music sheets:</p>

    <div className='container'>
        {musicList.map((music) => (
          <MusicCard key={music.id} image={music.image} music={music} />
          ))}
    </div>
          </div>
  );
}

export default MusicContainer;
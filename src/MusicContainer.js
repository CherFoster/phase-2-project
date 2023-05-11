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
    <div>
        {musicList.map((music) => (
        <MusicCard key={music.id} music={music} />
        ))}
    </div>
  );
}

export default MusicContainer;
import React, {useState} from "react";
import { Link } from 'react-router-dom';

function MusicCard({ music }) {
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo)
      }

    return (
        <div className="music-card">
            <h3>{music.name}</h3>
            <img className="picture" 
            src={music.image} 
            alt="colors" 
            onClick={handleClick}/>
            <h4>By {music.musician}</h4>
            {showInfo && (
                <h3><Link to={music.link}>🎶 Link</Link></h3>
            )}
        </div>
    )
}

export default MusicCard; 
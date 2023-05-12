import React, { useState } from "react";
import { Link } from 'react-router-dom';

function MusicCard({ music }) {
    const defaultImg = "https://clipartspub.com/images/clipart-piano-keyboard-3.png";
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo);
      }

    return (
        <div className="music-card">
            <h3>{music.name}</h3>
            <img className="picture" 
            src={defaultImg} 
            alt="colors" 
            onClick={handleClick}/>

            <h4>By {music.musician}</h4>

            {showInfo && (
                <div>
                <h4>Instrument: {music.instrument}</h4>
                <h4><Link to={music.link}>🎶 Link</Link></h4>
                </div>
            )}
        </div>
    )
}

export default MusicCard; 
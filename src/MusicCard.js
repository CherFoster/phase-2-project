import React, {useState} from "react";

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
            {showInfo}
        </div>
    )
}

export default MusicCard; 
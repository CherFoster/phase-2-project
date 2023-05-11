import React, {useState} from "react";

function MusicCard({ music }) {
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo)
      }

    return (
        <div className="color-card">
            <h3>{music.name}</h3>
            <img className="picture" src={music.image} alt="colors" onClick={handleClick}/>
        
            {showInfo && (
            <div>
             <h4>{music.instrument}</h4>
            </div>)}
        </div>
    )
}

export default MusicCard; 
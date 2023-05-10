import React, {useState} from "react";

function ColorCard({ color }) {
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo)
      }

    return (
        <div className="color-card">
            <h3>{color.name}</h3>
            <img className="picture" src={color.image} alt="colors" onClick={handleClick}/>
        
            {showInfo && (
            <div>
             <h4>{color.description}</h4>
             <p>{color.numbers}</p>
            </div>)}
        </div>
    )
}

export default ColorCard; 
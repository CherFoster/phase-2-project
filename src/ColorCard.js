import React from "react";

function ColorCard({ color }) {
    return (
        <div className="color-card">
            <h3>{color.name}</h3>
            <img className="picture" src={color.image} />
            <p>{color.description}</p>
        </div>
    )
}

export default ColorCard;
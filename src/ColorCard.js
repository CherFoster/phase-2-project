import React from "react";

function ColorCard({ color }) {
    return (
        <div className="color-card">
            <h1>Pick a Color:</h1>
            <h3>{color.title}</h3>
        </div>
    )
}

export default ColorCard;
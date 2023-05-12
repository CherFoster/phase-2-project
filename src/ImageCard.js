import React from "react";

function ImageCard() {
    const imageUrl = "https://clipartspub.com/images/clipart-piano-keyboard-3.png";

    return (
        <div>
            <img src={imageUrl} alt="picture" />
        </div>
    )
}

export default ImageCard;
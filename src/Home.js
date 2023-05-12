import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id='home'>
            <br/>
            Upload and store all of your favorite sheet music in one place to be easily accessible for when you practice!
            <br/>
            There are thousands of pages of free music sheets online.
            <br/>
            <br/>
            Check out a few of the links below for free sheet music:
            <br/>
            <ul className="links">
                <li><Link to='https://musescore.com/'>🎼 MuseScore</Link></li>
                <li><Link to='https://www.jellynote.com/en'>🎼 Jellynote</Link></li>
                <li><Link to='https://www.8notes.com/'>🎼 8 Notes</Link></li>
            </ul>
        </div>
    )

}

export default Home;
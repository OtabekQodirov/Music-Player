import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons'


const Song = ({currentSong, setOpenLibrary, openLibrary}) => {
    function openLib(){
        setOpenLibrary(!openLibrary);
    }

    return (
        <div className="song">
            <div className="tepa">
                <h2>WAVES</h2>
                <button className="btn" onClick={openLib} >library<FontAwesomeIcon icon={faMusic} /></button>
            </div>
            <div className="ozi">
                <img src={currentSong.cover} />
                <h1>{currentSong.name}</h1>
                <p>{currentSong.artist}</p>
            </div>
        </div>
    )
}

export default Song

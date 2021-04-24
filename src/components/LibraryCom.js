import React from 'react';
import '../styles/LibraryCom.scss';


const LibraryCom = ({el, setCurrentSong}) => {
    function changeCurrentSong(){
        setCurrentSong(el);
    }
    return (
        <div className="Bar" onClick={changeCurrentSong}>
            <div>
                <img src={el.cover} />
            </div>
            <div>
                <h3>{el.name}</h3>
                <p>{el.artist}</p>
            </div>
        </div>
    )
}

export default LibraryCom

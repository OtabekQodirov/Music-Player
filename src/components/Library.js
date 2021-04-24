import React from 'react';
import LibraryCom from './LibraryCom.js';
import '../styles/Library.scss';

const Library = ({songArray, setCurrentSong, openLibrary}) => {
    
    return (
        <div className={`Container ${openLibrary ? '' : 'openLibrar'}`}>
            <h1 className="logo">Library</h1>
            {songArray.map(el =>{
                return (
                    <LibraryCom el={el} setCurrentSong={setCurrentSong}  />
                )
            })}
            
        </div>
    )
}

export default Library

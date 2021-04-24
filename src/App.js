import React, {useState} from 'react';
import './styles/app.scss';
import Song from './components/Song.js';
import Data from './data.js';
import Library from './components/Library.js';
import Player from './components/Player.js';



function App() {
  const [songArray, setSongArray] = useState(Data())
  const [currentSong, setCurrentSong] = useState( songArray[0] )
  const [isPlaying, setIsPlaying] = useState(false)
  const [openLibrary, setOpenLibrary] = useState(false)

  
  
  return (
    <div>
      <Song 
        currentSong={currentSong} 
        setOpenLibrary={setOpenLibrary} 
        openLibrary={openLibrary}
      />
      <Player 
        songArray={songArray}
        currentSong ={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        setCurrentSong={setCurrentSong} 
      />
      <Library 
        songArray={songArray} 
        setCurrentSong={setCurrentSong} 
        openLibrary={openLibrary} 
      />
    </div>
     
  );
}

export default App;

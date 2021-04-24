import React,{useRef, useState} from 'react';
import '../styles/player.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForward, faBackward, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong ,isPlaying, setIsPlaying, setCurrentSong, songArray}) => {
    const audio = useRef()

    function handlerClick(){
        
        setIsPlaying(!isPlaying)
        if(isPlaying === true){
            audio.current.pause();
        }else{
            audio.current.play();
        }
    }

    const [musicTime, setMusicTime] = useState({
        currentTime : 0,
        duration : 0,
    })
    
    function HandlerChange(){
        let currentTime = Math.ceil(audio.current.currentTime);
        let durationTime = Math.ceil(audio.current.duration);

        setMusicTime({...musicTime, currentTime: currentTime, duration: durationTime})
        
        
    }

    function dragHandler(e){
        setMusicTime(e.target.value)
        audio.current.currentTime = e.target.value
    }
    
    function secondsToTime(e){
        var m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');
        
        return m + ':' + s;
    }

    function skipSongHandler(skip){
        let indexSong = songArray.findIndex(i =>i.id === currentSong.id);
        
        if(skip === 'next'){
            setCurrentSong(songArray[(indexSong + 1) % songArray.length])
        }else if(skip === 'prev'){
            setCurrentSong(songArray[indexSong - 1])
        }
        
    }

    
        
    return (
        <div className="Player">
            <div className="control">
                <p>{secondsToTime(musicTime.currentTime)}</p>
                <input type="range" 
                    onChange={dragHandler}
                    min={0}
                    max={musicTime.durationTime}
                    value={musicTime.currentTime}
                />
                <p>{secondsToTime(musicTime.duration)}</p>
            </div>
            <div className="control">
                <FontAwesomeIcon onClick={() => skipSongHandler('prev')} size="2" icon={faBackward} />
                <FontAwesomeIcon onClick={handlerClick} size="2" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipSongHandler('next')} size="2" icon={faForward}  />
            </div>

            <audio onLoadedData={HandlerChange} onTimeUpdate={HandlerChange} ref={audio} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player

import React, {useState, useEffect, useRef } from 'react'
import Leftarrow from '../components/Leftarrow'
import Timer  from '../components/Timer'
import Settings from '../components/Settings'
import Buttons from '../components/Buttons'
import Congrats from '../components/Congrats'
import Confetti from 'react-confetti'

import rainUrl from '../assets/audio/rain.mp3'
import wavesUrl from '../assets/audio/waves.mp3'
import forestUrl from '../assets/audio/forest.mp3'
import fireUrl from '../assets/audio/fire.mp3'

import gong from '../assets/audio/gong.mp3'

import rainBg from '../assets/video/rain.mov'
import wavesBg from '../assets/video/waves.mp4'
import forestBg from '../assets/video/forest.mp4'
import fireBg from '../assets/video/fire.mp4'

function Try(props) {
  
// state to control duration and sound
    const [settings, setSettings] = useState(
      {
        duration:"1",
        sound:"",
        url:""
      }
    )
// state to make certain components invisible after x amount of time without mouse movements
    const [isInvisible, setIsInvisible] = useState(false)
// state that contains background video
    const [backgroundVid, setBackgroundVid] = useState()
// timer related states
    const startTime = settings.duration*60
    const [timerFinished, setTimerFinished] = useState(false)
// const [seconds, setSeconds] = useState(60)
    const [seconds, setSeconds] = useState(60)
    const [isActive, setIsActive] = useState(false)
    const endSound = new Audio(gong)
    endSound.volume = 0.2

// background sound element
    const audioRef= useRef(null)
    const audio = <audio loop src={settings.url} ref={audioRef}></audio>
  
// background video element
    const videoRef= useRef(null)
    const video = <video className="bg-vid" muted loop src={backgroundVid} ref={videoRef}/>

// function to play/pause timer
    function toggle(){
        setIsActive((prev) => !prev)
        setTimerFinished((prev) => false)
        if(settings.sound !== '' && settings.sound !== 'silence'){
          isActive? videoRef.current.pause(): videoRef.current.play()
          isActive? audioRef.current.pause(): audioRef.current.play()
        } else if (settings.sound === 'silence'){
          isActive? videoRef.current.pause(): videoRef.current.play()
        }
    }
// function to reset timer
    function reset() {
        setSeconds((prev) => startTime)
        setIsActive((prev) => false)
        setTimerFinished((prev) => false)
        if(settings.sound !== '' ){
          videoRef.current.pause()
          videoRef.current.load()
          audioRef.current.pause()
          audioRef.current.load()
        }
    }
// function to play gong sound when timer runs out
    function playEndSound() { 
      if (!timerFinished) {
         endSound.play();
          setTimerFinished(true);
         } }
// useEffect for timer logic
    useEffect(() => {
        let interval = null;
        if (seconds <= 0) {
          setTimeout(()=>{
            setIsActive(prev=>false);
            playEndSound()
            if(settings.sound !== '' ){
              videoRef.current.pause()
              audioRef.current.pause()
            }
          },500)
        }
        if (isActive) {
          interval = setInterval(() => {
            setSeconds((s) => s - 1)
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval); 
        }
    
      }, [isActive, seconds, settings])

// functions to add and subtract time
  function addTime(){
    if(settings.duration<60 ){

      setSettings((prev)=>{
        return {
          ...prev,
          duration: parseInt(prev.duration)+1
        }
      })
      setSeconds((prev) => parseInt(prev+60))
    }
  }
  function subtractTime(){
    if(settings.duration>1 && seconds > 60){

      setSettings((prev)=>{
        return {
          ...prev,
          duration: parseInt(prev.duration)-1
        }
      })
      setSeconds((prev) => parseInt(prev-60))
    }
  }
// function to update sound
  function changeSound(event) {
    const { value } = event.target;
		setSettings((prev) => {
			switch (value) {
				case 'silence':
					return { ...prev, sound: value };
				case 'forest':
					return { ...prev, sound: value, url: forestUrl };
				case 'rain':
					return { ...prev, sound: value, url: rainUrl };
				case 'waves':
					return { ...prev, sound: value, url: wavesUrl };
				case 'fire':
					return { ...prev, sound: value, url: fireUrl };
				default:
					return settings;
			}
		});
    setIsActive(prev => false)
	}
// function to update bg video
  useEffect(()=>{
		setBackgroundVid((prev) => {
			switch (settings.sound) {
				case 'silence':
          return;
				case 'forest':
					return forestBg;
				case 'rain':
					return rainBg;
				case 'waves':
					return wavesBg;
				case 'fire':
					return fireBg;
				default:
					return backgroundVid;
			}
  })
  },[settings.sound])
// function to make components disappear in absence of mouse movements
  function onMouseMove(e){
  setIsInvisible(false)
    setTimeout(()=> {
      if(isActive === true) {
        setIsInvisible(true)
      }
    }, 3000)
    }

  return (
    <header className="Try-header">
      <div className='try-container'
      onMouseMove={onMouseMove}
      >
        <Leftarrow
        isInvisible={isInvisible}
        />
        {video}
        {settings.sound !== 'silence' && audio}
        <div className="overlay"></div>
        <Settings 
        settings={settings} 
        changeSound={changeSound}
        isInvisible={isInvisible}
        />
        <Timer 
        settings={settings} 
        seconds={seconds}
        startTime={startTime}
        isActive={isActive}
        toggle={toggle}
        reset={reset}
        audio={audio}
        timerFinished={timerFinished}
        addTime={addTime}
        subtractTime={subtractTime}
        isInvisible={isInvisible}
        />
        <Buttons
        reset={reset}
        isActive={isActive}
        toggle={toggle}
        timerFinished={timerFinished}
        isInvisible={isInvisible}
        />
        {timerFinished && <Confetti className='confetti'/>}
        {timerFinished && <Congrats reset={reset} />}
    </div>
    </header>
  )
}

export default Try
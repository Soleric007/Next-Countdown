import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal'
const TimerChallenge = ({ title, targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timer = useRef()
    const dialog = useRef()
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.showModal()
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => {
               return prevTimeRemaining - 10
            })
            

        }, 10)

    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }
    function handleStop() {
        dialog.current.showModal()
        clearInterval(timer.current)
        
    }
    return (
        <>
            <ResultModal timeRemaining={timeRemaining} onReset={handleReset} ref={dialog} targetTime={targetTime} result={'won'} />
            <section className='challenge'>
                <h2>
                    {title}
                </h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is runnig...' : 'Timer is inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge

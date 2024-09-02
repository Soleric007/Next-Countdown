import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef() 
  const [inputName, setInputName] = useState(null) 
  function handleSubmit() {
    setInputName(playerNameRef.current.value)
    playerNameRef.current.value = ''
  }
  return (
    
    <section id="player">
      <h2>Youkoso {
         inputName ?? 'Soul Reaper'
        }, watashi no soul society</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleSubmit}>O namae wa</button>
      </p>
    </section>
  );
}

import React from 'react'

function Keybord() {

    const OneKeyEvent = () => {
        console.log("key presed!");
    }
  return (
    <div>
      <h1>Keybord Event</h1>
      <input type="" onKeyDown={OneKeyEvent}/>
    </div>
  )
}

export default Keybord

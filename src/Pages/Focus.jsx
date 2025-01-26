import React from 'react'

function Focus() {
    const FocusText = () => {
        console("You Have Focus on Input!");
    }
    const BlurText = () => {
        console("You Have Blur on Input!");
    }
  return (
    <div>
        <br /> <br />

        <h1>Focus Event</h1>
        <input type="text" onFocus={FocusText} />
        <br />
        <input type="text" onBlur={BlurText} />
      
    </div>
  )
}

export default Focus;

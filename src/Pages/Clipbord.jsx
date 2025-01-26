import React from 'react'

function Clipbord() {
    const Copytext = () =>{
        alert("Text Copied");
    }
    const OnPastText = () =>{
      alert("Text Pased Successfully!");
  }
  return (
    <div>
      <p onCopy={Copytext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facere?</p>

      <input type="text" onPaste={OnPastText} placeholder='My name'/>
    </div>
  )
}

export default Clipbord
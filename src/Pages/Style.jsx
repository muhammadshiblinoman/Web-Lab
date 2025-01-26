import React from 'react'
import "./Style.css"

function Style() {
  const Element = {
    color: "red",
    backgroundColor: "green",
    textAlign: "center",
  }
  return (
    <div>
      <h1 style={Element}>My First Component</h1>
      <h1 className='none'>Another Style</h1>
    </div>
  )
}

export default Style

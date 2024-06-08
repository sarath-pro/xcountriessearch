import React from 'react'
import "./Header.css"

function Header({eventHandler}) {
  return (
    <div className='header'>
        <input type="text" onChange={(event)=>{
            eventHandler(event.target.value)
        }} placeholder='Search for countries...'/>
    </div>
  )
}

export default Header
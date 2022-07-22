import React from 'react'
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'
export default function Header() {
  return (
    <div>
      <header className='header'>
      <nav className='nav'>
        <img src={logo} alt='iron hack logo'/>
        <img src={menu} alt='menu'/>

    </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super ninja developer...</p>
        <button><strong>Awesome!</strong></button>
        
    </header>
    </div>
    
  )
}

import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify }
from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header
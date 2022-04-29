import React from 'react'
import { useUserContext } from '../../store/useContext'
import './Nav.css'

const Nav = () => {
  const {show, setShow} = useUserContext()

  const handleClick = () => {
    setShow(true)
  }
  return (
    <header className='header'>
        <nav>
           <button className='btn-agregar' onClick={() => handleClick()}> + Agregar user </button>
        </nav>
    </header>
  )
}

export default Nav
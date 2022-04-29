import React from 'react'
import { useUserContext } from '../../store/useContext'
import Form from '../Form/Form'
import User from './User'
import './UserConteiner.css'


const UsersContainer = () => {
  const {show, usuarios} = useUserContext()
  return (
    <div  className="user-conteiner">
       
        {
          usuarios.length > 0 ?
          usuarios.map((x,i) => (
          <User 
          name={x.name}
          lastname={x.lastname}
          email={x.email}
          key={i}
          />))
          :
          <h5>No hay usuarios!</h5>
        }
        {
        show ? 
        <Form />
        :
        null
      }
    </div>
  )
}

export default UsersContainer

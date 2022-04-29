import { useState } from 'react';
import useFormulario from '../../hooks/useFormulario'
import './Form.css'
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import { useUserContext } from '../../store/useContext';



const Form = () =>{
    const {usuarios, setUsuarios , show, setShow} = useUserContext()
    
    const [formulario, handleChange,reset] = useFormulario({name:'', lastname:'', email: ''})
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(formulario.name === '' || formulario.lastname === '' || formulario.email === ''){
        return
      }
      setUsuarios([
        ...usuarios,
        formulario,
      ])
      reset()
      
      setShow(false)
      
    }

   
    

   return(
   <div className='form-conteiner'>
        <form onSubmit={handleSubmit} className="form-body">
          <Inputs value={formulario.name} name="name" placeholder="Nombre" onChange={handleChange} type="text" />
          <Inputs value={formulario.lastname} name="lastname" placeholder="Apellido" onChange={handleChange} type="text"/>
          <Inputs value={formulario.email} name="email" placeholder="example@gmail.com" onChange={handleChange} type="email" />

          <Button type="submit"/>
        </form>
    </div>)
}


export default Form
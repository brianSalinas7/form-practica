import { useState } from 'react';
import useFormulario from '../../hooks/useFormulario'
import './Form.css'
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import { useUserContext } from '../../store/useContext';



const Form = ({name,lastname,email}) =>{
    const {usuarios, setUsuarios , setShow, isEditing, setIsEditing,seleccionado} = useUserContext()
    
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
      setIsEditing(false)
    }

   const handleCancelEdit = () =>{
     setIsEditing(false)
     setShow(false)
   }


    
  
  
   return(
     <>
   {!isEditing ?
    <div className='form-conteiner'>
        <form onSubmit={handleSubmit} className="form-body">
          <Inputs value={formulario.name} name="name" placeholder="Nombre" onChange={handleChange} type="text" />
          <Inputs value={formulario.lastname} name="lastname" placeholder="Apellido" onChange={handleChange} type="text"/>
          <Inputs value={formulario.email} name="email" placeholder="example@gmail.com" onChange={handleChange} type="email" />

          <div className='btn-form'>
          <Button id="save-btn" type="submit" name="Guardar"/>
          <Button id="cancel-btn" type="submit" name="Cancelar" onClick={()=> handleCancelEdit()}/>
          </div>

        </form>
    </div>
    :

    <div className='form-conteiner'>
        <form onSubmit={handleSubmit} className="form-body">
          <Inputs value={seleccionado.name} name="name" placeholder="Nombre" onChange={handleChange} type="text" />
          <Inputs value={seleccionado.lastname} name="lastname" placeholder="Apellido" onChange={handleChange} type="text"/>
          <Inputs value={seleccionado.email} name="email" placeholder="example@gmail.com" onChange={handleChange} type="email" />

          <div className='btn-form'>
          <Button id="save-btn" type="submit" name="Guardar"/>
          <Button id="cancel-btn" type="submit" name="Cancelar" onClick={()=> handleCancelEdit()}/>
          </div>

        </form>
    </div>
    
}
</>)}


export default Form
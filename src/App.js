import { useState } from 'react';
import Button from './Components/Button/Button';
import Card from './Components/Card';
import Inputs from './Components/Inputs/Inputs';
import useFormulario from './hooks/useFormulario'
import './App.css'
function App() {
  const [usuarios,setUsuarios] = useState([])
  const [formulario, handleChange,reset,setFormulario] = useFormulario({name:'', lastname:'', email: ''})

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

    
  }

  const deleteUser = ( email ) =>{
    setUsuarios(usuarios.filter(x => x.email != email))
  }

 

  return (
    <div className='conteiner'>
      <Card>
        <form onSubmit={handleSubmit}>
          <Inputs value={formulario.name} name="name" placeholder="Nombre" onChange={handleChange} type="text" />
          <Inputs value={formulario.lastname} name="lastname" placeholder="Apellido" onChange={handleChange} type="text"/>
          <Inputs value={formulario.email} name="email" placeholder="example@gmail.com" onChange={handleChange} type="email" />

          <Button type="submit"/>
        </form>
      </Card>

      <Card>
      {usuarios.length>0 ? 
        <ul className='lista-usuarios'>
          {usuarios.map((x,idx) =>
            <div key={idx}>
              <li >{`${x.name} ${x.lastname} |  ${x.email}`}</li>            
              <div className='actions-btn'>
                <p className='btn-delete' onClick={() => deleteUser(x.email)}>borrar</p>
                <p>editar</p>
              </div>
            </div>
            
          )}
        </ul>
        :
        <h3>No hay usuarios!</h3>
    }
    </Card>
    

    
      
    </div>
  );
}

export default App;

import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext([])

export const useUserContext = () => {
    return(
        useContext(UserContext)
    )
}


const getLocalUser =() => {

    let users = localStorage.getItem("usuariosLS")

    if(users){
        return JSON.parse(localStorage.getItem("usuariosLS"))
    }
    else{
       return []
    }

}



const UserContextProvider = ({children}) => {
    const [show, setShow] = useState(false)
    const [usuarios,setUsuarios] = useState(getLocalUser())
    const [isEditing, setIsEditing] = useState(false)
    const [seleccionado, setSeleccionado] = useState({name:'', lastname:'', email:''})

    useEffect(() => {
        localStorage.setItem("usuariosLS", JSON.stringify(usuarios))
    },[usuarios])

    const handleEdit = (data) =>{
        setIsEditing(true)
		const encontrado = usuarios.find(x => x.email === data)
        setSeleccionado(encontrado)

	}


  return (
   <UserContext.Provider value={{usuarios, setUsuarios,show, setShow, isEditing, setIsEditing, seleccionado,handleEdit}}>
       {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
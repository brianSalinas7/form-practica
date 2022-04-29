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

    useEffect(() => {
        localStorage.setItem("usuariosLS", JSON.stringify(usuarios))
    },[usuarios])


  return (
   <UserContext.Provider value={{usuarios, setUsuarios,show, setShow}}>
       {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
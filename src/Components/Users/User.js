import React, { useState } from 'react';
import { useUserContext } from '../../store/useContext';
import Form from '../Form/Form';
import './User.css';

const User = ({name, lastname, email}) => {

	const {isEditing, setIsEditing, setUsuarios,usuarios, handleEdit} = useUserContext()

	

	const deleteUser = (email) => {
		setUsuarios(usuarios.filter(x => x.email !== email))
	 }


	return (
		<div className='user'>
			<li>{name} {lastname} {email}</li>
			<div className='actions-btn'>
					<button id='edit-btn'  onClick={() => handleEdit(email)}><i className="fa-solid fa-pen-to-square"></i></button>

				<button id='trash-btn' onClick={() => deleteUser(email)} ><i className="fa-solid fa-trash"></i></button>
			</div>

			{
				!isEditing ? 
				null
				:
				<Form 
				name={name}
				lastname={lastname}
				email={email}
				/>
			}




		</div>
	);
};

export default User;

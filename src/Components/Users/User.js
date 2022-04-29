import React from 'react';
import './User.css';

const User = ({name, lastname, email}) => {
	return (
		<div className='user'>
			<li>{name} {lastname} {email}</li>
			<div className='actions-btn'>
				<button>editar</button>
				<button>borrar</button>
			</div>
		</div>
	);
};

export default User;

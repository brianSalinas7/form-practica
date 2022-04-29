import { useUserContext } from '../../store/useContext'
import './Button.css'
const Button = ({name, ...rest}) => {
    
    return(
        <div className='conteiner-btn'>
            <button className='button-form' {...rest}>{name}</button>
        </div>
    )
}

export default Button
import './Inputs.css'
const Inputs = ({ ...rest}) => {
    return(
        <div className="fields">
            <input {...rest}/>
       </div>
    )
}

export default Inputs
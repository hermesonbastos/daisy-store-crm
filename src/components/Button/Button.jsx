import './styles.css'

const Button = ({name = "default", onClick}) => {
    return(
        <div>
            <button id='btn' onClick={() => onClick()}>{name}</button>
        </div>
    )
}

export default Button;
import './styles.css'
import PropTypes from "prop-types"

const Button = ({name = "default"}) => {
    return(
        <div>
            <button id='btn'>{name}</button>
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string,
  };

export default Button;
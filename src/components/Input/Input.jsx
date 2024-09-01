import "./styles.css";
import PropTypes from "prop-types";


const Input = ({ name = "default" , placeholder, type}) => {
  return (
    <div className="input-container">
        <label className="input-label" htmlFor={ name }>
          <span className="input-span">{name}</span>
        </label>
        <input name={ name } className="input-input" placeholder={placeholder} type={type}/>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input
import "./styles.css";
import PropTypes from "prop-types";

const Input = ({ name = "default" }) => {
  return (
    <div className="input-container">
        <label className="input-label" htmlFor={ name }>
          <span>{name}</span>
        </label>
        <input name={ name } className="input-input" />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
};

export default Input
import "./styles.css";
import PropTypes from "prop-types";

const Input = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  error,
  label,
  variant,
  disabled
}) => {
  return (
    <div className="input-box">
      <div className={variant !== "secondary" ? "input-container" : "input-container-secondary"}>
        <label className="input-label" htmlFor={name}>
          <span className="input-span">{label}</span>
        </label>
        <input
          id={name}
          name={name}
          value={value}
          className={variant !== "secondary" ? "input-input" : "input-input-secondary"}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          disabled={disabled}
        />
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

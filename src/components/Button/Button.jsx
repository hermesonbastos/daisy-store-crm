import "./styles.css";

const Button = ({ name = "default", onClick, icon, variant}) => {
    return (
        <button className={variant === "primary" ? "primary-button" : "secondary-button"} onClick={() => onClick()}>
            {icon}
            {name}
        </button>
    );
};

export default Button;

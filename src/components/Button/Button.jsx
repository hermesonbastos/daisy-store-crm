import "./styles.css";

const Button = ({ name = "default", onClick, icon }) => {
    return (
        <button className="primary-button" onClick={() => onClick()}>
            {icon}
            {name}
        </button>
    );
};

export default Button;

import { FaPen } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, screen }) => {
    const navigate = useNavigate();

    const handleClick = () => {navigate("../products/edit")}

    return (
        <div className="product-card">
            <div className="product-card-img">
                <img
                    className="product-img"
                    src="/src/assets/camisa.jpeg"
                    alt=""
                />
            </div>
            <div className="product-card-content">
                {screen === "onOrder" && (
                    <div className="qtd-container">
                        <span id="numero">x3</span>
                    </div>
                )}
                {screen === "onProducts" && (
                    <div className="icon-container" onClick={handleClick}>
                        <FaPen className="edit-icon" />
                    </div>
                )}
                <div className="product-data">
                    <span className="product-data--number">
                        N.º {product?.id ? product?.id : "2"}
                    </span>
                    <span className="product-data--name">{product?.name ? product?.name : "Nome do produto"}</span>
                    <span className="product-data--stock">Em estoque: {product?.stock ? product?.stock : "10"}</span>
                </div>
                <div className="product-price">R$ {product?.price ? product?.price : "10.99"}</div>
            </div>
        </div>
    );
};

export default ProductCard;

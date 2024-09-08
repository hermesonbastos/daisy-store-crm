import { FaPen } from "react-icons/fa";
import "./styles.css";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img
                    className="product-img"
                    src={
                        product?.images[0]?.image?.link
                            ? product?.images[0]?.image?.link
                            : "/src/assets/camisa.jpeg"
                    }
                    alt=""
                />
            </div>
            <div className="product-card-content">
                <div className="icon-container">
                    <FaPen className="edit-icon" />
                </div>
                <div className="product-data">
                    <span className="product-data--number">
                        N.º {product?.id}
                    </span>
                    <span className="product-data--name">{product?.name}</span>
                    <span className="product-data--stock">Em estoque: {product?.stock}</span>
                </div>
                <div className="product-price">R$ {product?.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;

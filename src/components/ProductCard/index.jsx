import { FaPen } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { MdLinkOff } from "react-icons/md";

const ProductCard = ({ product, screen, handleClick }) => {
  console.log(product);
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img
          className="product-img"
          src={
            product?.product?.images[0]?.image?.link ||
            product?.images[0]?.image?.link
          }
          alt=""
        />
      </div>
      <div className="product-card-content">
        {screen === "onOrder" && (
          <div className="qtd-container">
            <span id="numero">x{product?.quantity || product?.quantity}</span>
          </div>
        )}

        <div className="icon-container" onClick={handleClick}>
          {screen === "onProducts" && <FaPen className="icon" />}
          {screen === "onCategories" && <MdLinkOff size={30} />}
        </div>

        <div className="product-data">
          <span className="product-data--number">
            N.º {product?.product?.id ? product?.product?.id : "2"}
          </span>
          <span className="product-data--name">
            {product?.product?.name || product?.name}
          </span>
          <span className="product-data--stock">
            Em estoque:{" "}
            {product?.product?.stock || product?.stock}
          </span>
        </div>
        <div className="product-price">
          R$ {product?.product?.price || product?.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

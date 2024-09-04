import { FaEdit } from "react-icons/fa";
import './styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img className="product-img" src="/src/assets/camisa.jpeg" alt="" />
      </div>
      <div className="product-card-content">
        <div className="icon-container"><FaEdit className="edit-icon" /></div>
        <div className="product-data">
          <span className="product-data--number"></span>
          <span className="product-data--name"></span>
          <span className="product-data--stock"></span>
        </div>
        <div className="product-price"></div>
      </div>
    </div>
  )
}

export default ProductCard;
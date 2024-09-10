import "./styles.css"
import { useNavigate } from "react-router-dom"

const OrderCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {navigate("../details")}

  return (
        <div className="order-card" onClick={handleClick}>
          <div className="order-card-content">
            <span>N.º</span>
            <span>Nome do Cliente</span>
          </div>
          <div className="order-card-data">
            <span>Data</span>
            <span>Numero</span>
          </div>
      </div>
  )    
}

export default OrderCard;
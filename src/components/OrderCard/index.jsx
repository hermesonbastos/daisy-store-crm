import "./styles.css"

const OrderCard = () => {
  return (
        <div className="order-card">
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
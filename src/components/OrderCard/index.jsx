import "./styles.css";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses começam do 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/order/${order?.id}`);
  };

  return (
    <div className="order-card" onClick={handleClick}>
      <div className="order-card-content">
        <span style={{ fontWeight: "bold" }}>N.º {order?.id}</span>
        <span style={{ fontSize: "18px" }}>
          <span style={{ fontWeight: "bold", margin: 0, fontSize: "18px" }}>Cliente:</span>{" "}
          {order?.customer_name}
        </span>
      </div>
      <div className="order-card-data">
        <span>
          Data:{" "}
          {order?.created_at
            ? formatDate(order.created_at)
            : "Data não disponível"}
        </span>
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>{order?.customer_phone}</span>
      </div>
    </div>
  );
};

export default OrderCard;

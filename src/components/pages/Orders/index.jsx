import { useNavigate } from "react-router-dom";
import { GET_ORDERS } from "../../../api";
import Container from "../../Layout/Container";
import OrderCard from "../../OrderCard";
import PageTitle from "../../PageTitle";
import "./styles.css";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const Orders = () => {
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const { url, options } = GET_ORDERS();
    request(url, options);
  }, [request]);

  const orders = data || [];

  console.log(orders)

  return (
    <Container>
      <PageTitle title="Pedidos" />
      <div className="order-content">
        {orders.map((order, index) => {
          return <OrderCard key={index} order={order} />;
        })}
      </div>
    </Container>
  );
};

export default Orders;

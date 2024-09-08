import Container from "../../Layout/Container";
import OrderCard from "../../OrderCard";
import './styles.css';

const orders = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const Orders = () => {
    return (
        <Container>
            <h2>Pedidos</h2>
            <div className="order-content">
                {orders.map((order, index) => {
                    return <OrderCard />;
                })}
            </div>
        </Container>
    );
};

export default Orders;

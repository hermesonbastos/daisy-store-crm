import Container from "../../Layout/Container";
import OrderCard from "../../OrderCard";
import './styles.css';

const orders = [{}, {}, {}, {}, {}];

const Orders = () => {
    return (
        <Container>
            {orders.map((order, index) => {
                return <OrderCard />;
            })}
        </Container>
    );
};

export default Orders;

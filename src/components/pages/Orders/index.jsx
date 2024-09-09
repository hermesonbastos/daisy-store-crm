import Container from "../../Layout/Container";
import OrderCard from "../../OrderCard";
import PageTitle from "../../PageTitle";
import './styles.css';

const orders = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const Orders = () => {
    return (
        <Container>
            <PageTitle title="Pedidos" />
            <div className="order-content">
                {orders.map((order, index) => {
                    return <OrderCard />;
                })}
            </div>
        </Container>
    );
};

export default Orders;

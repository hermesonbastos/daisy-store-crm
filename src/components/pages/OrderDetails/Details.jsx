import Container from "../../Layout/Container"
import ProductCard from "../../ProductCard"
import Button from "../../Button/Button"
import "./styles.css"

const Details = () => {
    return(
        <div className="details-container"> 
             <span id="span1">Pedido N.º</span>
                <div className="details-info">
                    <span>Nome do cliente:</span>
                    <span>Telefone:</span>
                    <span>Data do pedido:</span>
                </div>
                <div className="details-product">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                </div>
                <div className="details-order">
                    <span id="span2">Total:</span>
                    <div className="details-btn">
                        <Button variant="secondary" icon="" name="Descartar Pedido"/>
                        <Button variant="primary" icon="" name= "Confirmar Pedido"/>
                    </div>
                </div>     
        </div>
    )
} 

export default Details
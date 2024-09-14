import PageTitle from "../../PageTitle";
import Container from "../../Layout/Container"
import Input from "../../Input/Input";
import Button from "../../Button/Button"
import "./styles.css"

const EditProduct = () => {
    return(
        <Container>
            <PageTitle title="Editar Produto"/>
            <div className="edit-container">
                <div className="edit-card">
                    <div className="edit-card-img">
                        <img className="product-img" src="/src/assets/camisa.jpeg" alt="" />
                    </div>
                    <div className="edit-card-info">
                    <Input variant="secondary" label="ESTOQUE" type="text" name="name" />
                    </div>
                </div>
                <div className="edit-input">
                    <Input variant="secondary" label="NOME DO PRODUTO" type="text" name="name" />
                    <Input variant="secondary" label="DESCRIÇÃO" type="text" name="description" />
                    <Input variant="secondary" label="VALOR" type="number" name="price" />
                </div>
            </div>

            <div className="edit-button">
            <Button variant="secondary" icon="" name="Salvar alterações"/>
            <Button variant="primary" icon="" name= "Excluir Produto"/>
            </div>

        </Container>
    )
}

export default EditProduct;
import Container from "../../Layout/Container"
import PageTitle from "../../PageTitle/index"
import Input from "../../Input/Input"
import Button from "../../Button/Button"
import ProductCard from "../../ProductCard/index"
import "./styles.css"

const products = [{}, {}, {}, {}];

const EditCategory = () =>{
    return(
        <Container> 
            <div className="edit-category-container">
               <div className="edit-content">
                    <PageTitle title="Editar Categoria"/>
                    <div className="category-container">
                        <div className="input-category-container">
                            <Input label="NOME DA CATEGORIA" type="text" variant="secondary"/>
                            <Input label="DESCRIÇÃO" type="text" variant="secondary"/>
                        </div>
                    </div>
               </div>
               <div className="products-container">
                    <div className="products-content">
                        <PageTitle title="Produtos"/>
                        <div>
                            <Button name="Vincular Produtos" variant="primary"/>
                        </div>
                    </div>
                    <div className="edit-products-list">
                        {products.map((order, index) => {
                        return <ProductCard screen="onProducts"/>;
                    })}
                    </div>
               </div>
            </div>
        </Container>
    )
}

export default EditCategory;
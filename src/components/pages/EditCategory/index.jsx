import Container from "../../Layout/Container"
import PageTitle from "../../PageTitle/index"
import Input from "../../Input/Input"
import Button from "../../Button/Button"
import ProductCard from "../../ProductCard/index"
import "./styles.css"
import { useState } from "react"
import ProductsModal from "../../ProductsModal/index"

const products = [{}, {}, {}, {}];

const EditCategory = () => {
    const [categoryModal, setCategoryModal] = useState(false);

    return(
        <Container>
            <ProductsModal showModal={categoryModal} setShowModal={setCategoryModal} />
            <div className="edit-category-container">
               <div className="edit-content">
                    <PageTitle title="Editar Categoria"/>
                    <div className="category-input-container">
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
                            <Button name="Vincular Produtos" variant="primary" onClick={() => { 
                                setCategoryModal(true);
                                let body = document.querySelector("body");
                                body.style.overflow = "hidden";
                            }}/>
                        </div>
                    </div>
                    <div className="edit-products-list">
                        {products.map((order, index) => {
                        return <ProductCard screen="onCategories"/>;
                    })}
                    </div>
               </div>
            </div>
        </Container>
    )
}

export default EditCategory;
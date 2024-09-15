import { FaPlus } from "react-icons/fa";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/index"
import './styles.css';
import CategoryModal from "../CategoryModal/index";
import { useState } from "react"

const Categories = () => {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}];

  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <Container>
      <CategoryModal showModal={categoryModal} setShowModal={setCategoryModal} />
      <div className="categories-container">
        <div className="categories-list-header">
          <PageTitle title="Categorias" />
          <div>
            <Button
              icon={<FaPlus />}
              name="Adicionar"
              variant="primary"
              onClick={() => { 
                setCategoryModal(true);
                let body = document.querySelector("body");
                body.style.overflow = "hidden";}}
            />
          </div>
        </div>
        <div className="categories-list">
          {categories.map((category, index) => {
            return (
              <CategoryCard />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Categories;

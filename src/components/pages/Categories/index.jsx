import { FaPlus } from "react-icons/fa";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../ProductCard";
import './styles.css';

const Categories = () => {
  const categories = [{}, {}, {}, {}, {}, {}];

  // const navigate = useNavigate();

  return (
    <Container>
      <div className="categories-list">
        <dir className="categories-list-header">
          <PageTitle title="Categorias" />
          <div>
            <Button
              icon={<FaPlus />}
              name="Adicionar"
              variant="primary"
              onClick={() => {}}
            />
          </div>
        </dir>
        {categories.map((category, index) => {
          return (
            <div>Categories</div>
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;

import { FaPlus } from "react-icons/fa";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../CategoryCard/index"
import './styles.css';

const Categories = () => {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}];

  const navigate = useNavigate();

  const handleClick = () => {navigate("../categories/add")}

  return (
    <Container>
      <div className="categories-container">
        <div className="categories-list-header">
          <PageTitle title="Categorias" />
          <div>
            <Button
              icon={<FaPlus />}
              name="Adicionar"
              variant="primary"
              onClick={handleClick}
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

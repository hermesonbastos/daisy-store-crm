import { FaPlus } from "react-icons/fa";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/index";
import './styles.css';
import CategoryModal from "../CategoryModal/index";
import { useEffect, useState } from "react";
import { GET_CATEGORIES } from "../../../api";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const navigate = useNavigate();
  const { data, error, loading, request } = useFetch();

  const fetchCategories = async () => {
    const { url, options } = GET_CATEGORIES();
    await request(url, options);
  };

  useEffect(() => {
    fetchCategories();
  }, [request]);

  const categories = data || [];

  return (
    <Container>
      <CategoryModal
        showModal={categoryModal}
        setShowModal={setCategoryModal}
        onCategoryCreated={fetchCategories} // Pass the callback
      />
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
                body.style.overflow = "hidden";
              }}
            />
          </div>
        </div>
        <div className="categories-list">
          {categories.map((category, index) => (
            <CategoryCard handleClick={() => navigate(`../categories/edit/${category?.id}`)} key={index} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;

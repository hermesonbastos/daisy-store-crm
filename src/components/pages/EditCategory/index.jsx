import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle/index";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import ProductCard from "../../ProductCard/index";
import "./styles.css";
import { useEffect, useState } from "react";
import ProductsModal from "../../ProductsModal/index";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { useSnackbar } from "react-simple-snackbar";
import { DETAIL_CATEGORY, UPDATE_CATEGORY } from "../../../api";

const EditCategory = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { id } = useParams();
  const name = useForm();
  const description = useForm();
  const { request } = useFetch();
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [linkedProducts, setLinkedProducts] = useState([]);

  const fetchCategoryData = async () => {
    const { url, options } = DETAIL_CATEGORY(id);
    const response = await request(url, options);
    if (response && response.json) {
      const { name: categoryName, description: categoryDescription, products } = response.json;
      name.setValue(categoryName);
      description.setValue(categoryDescription);
      setLinkedProducts(products);
    }
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchCategoryData().then(() => setDataLoaded(true));
    }
  }, [id, dataLoaded]);

  const handleUnlinkProduct = (productId) => {
    setLinkedProducts((prevProducts) =>
      prevProducts.filter((product) => product.product.id !== productId)
    );
  };

  const handleAddProducts = async (productIds) => {
    // Remove duplications by creating a unique set of IDs
    const uniqueProductIds = Array.from(new Set([
      ...linkedProducts.map((product) => product.product.id),
      ...productIds,
    ]));

    const body = JSON.stringify({
      name: name.value,
      description: description.value,
      productIds: uniqueProductIds,
    });

    const { url, options } = UPDATE_CATEGORY(id, body);
    const response = await request(url, options);
    if (response?.response?.ok) {
      openSnackbar('Categoria atualizada com sucesso!');
      setTimeout(() => {
        closeSnackbar();
        fetchCategoryData();  // Refetch data after successful update
      }, 3000);
    } else {
      openSnackbar('Erro ao atualizar categoria');
      setTimeout(() => {
        closeSnackbar();
      }, 3000);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleAddProducts([]);
  };

  return (
    <Container>
      <ProductsModal 
        hiddenProducts={linkedProducts.map((product) => product?.product)}
        showModal={categoryModal}
        setShowModal={setCategoryModal}
        onAddProducts={handleAddProducts}
      />
      <div className="edit-category-container">
        <div className="edit-content">
          <PageTitle title="Editar Categoria" />
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="category-input-container">
              <div className="input-category-container">
                <Input
                  label="NOME DA CATEGORIA"
                  type="text"
                  variant="secondary"
                  name="name"
                  value={name.value}
                  onChange={name.onChange}
                  onBlur={name.onBlur}
                />
                <Input
                  label="DESCRIÇÃO"
                  type="text"
                  variant="secondary"
                  name="description"
                  value={description.value}
                  onChange={description.onChange}
                  onBlur={description.onBlur}
                />
              </div>
            </div>
            <Button name="Salvar Alterações" onClick={handleSubmit} />
          </form>
        </div>
        <div className="products-container">
          <div className="products-content">
            <PageTitle title="Produtos" />
            <div>
              <Button
                name="Vincular Produtos"
                variant="primary"
                onClick={() => {
                  setCategoryModal(true);
                  document.querySelector("body").style.overflow = "hidden";
                }}
              />
            </div>
          </div>
          <div className="edit-products-list">
            {linkedProducts ? linkedProducts.map((product, index) => (
              <ProductCard
                product={product?.product}
                key={index}
                screen="onCategories"
                handleClick={() => handleUnlinkProduct(product?.product.id)}
              />
            )) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditCategory;

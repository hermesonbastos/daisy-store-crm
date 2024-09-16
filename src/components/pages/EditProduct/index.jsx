import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Input from "../../Input/Input";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Switch from "../../Switch/Switch";
import Button from "../../Button/Button";
import DropDown from "../../DropDown/index";
import { DETAIL_PRODUCT, UPDATE_PRODUCT } from "../../../api";
import "./styles.css";
import useFetch from "../../../hooks/useFetch";
import { useSnackbar } from "react-simple-snackbar";

const EditProduct = () => {
  const { id } = useParams();
  const name = useForm();
  const description = useForm();
  const price = useForm();
  const stock = useForm();
  const [isAvailable, setIsAvailable] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const { data, error, loading, request } = useFetch();

  const [openSnackbar, closeSnackbar] = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    const { url, options } = DETAIL_PRODUCT(id);
    async function detailProduct() {
      try {
        const response = await request(url, options);
        const { name: prodName, description: prodDesc, price: prodPrice, stock: prodStock, images, categories } = response.json;

        name.setValue(prodName);
        description.setValue(prodDesc);
        price.setValue(prodPrice);
        stock.setValue(prodStock);
        setImagePreview(images[0].image.link);
        setIsAvailable(prodStock > 0);
        setSelectedCategoryId(categories[0]?.category?.id);
        setCategoryName(categories[0]?.category?.name);
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      }
    }
    detailProduct();
  }, [id, request]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const toggleAvailable = () => {
    setIsAvailable((v) => !v);
    if (!isAvailable) stock.setValue(0);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("price", parseFloat(price.value));
    formData.append("stock", parseInt(stock.value, 10));
    formData.append("categories", JSON.stringify([selectedCategoryId]));
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    const { url, options } = UPDATE_PRODUCT(id, formData);
    try {
      const { response, json } = await request(url, options);

      if (response?.ok) {
        openSnackbar('Categoria atualizada com sucesso!');
        setTimeout(() => {
          closeSnackbar();
        }, 3000);
        navigate("/products");
      } else {
        openSnackbar('Erro ao atualizar categoria');
        setTimeout(() => {
          closeSnackbar();
        }, 3000);
      }
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  };

  return (
    <Container>
      <PageTitle title="Editar Produto" />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar o produto: {error.message}</p>}
      {!loading && data && (
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-main">
              <div className="card-main-image" onClick={() => document.getElementById("imageUpload").click()}>
                <img className="product-img" src={imagePreview || "/src/assets/placeholder.jpeg"} alt="Product preview" />
              </div>
              <input
                type="file"
                id="imageUpload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="card-main-form">
                <Input
                  type="number"
                  label="Estoque"
                  variant="secondary"
                  {...stock}
                />
              </div>
            </div>
            <div className="card-settings">
              <Input
                variant="secondary"
                label="Nome do produto"
                type="text"
                name="name"
                {...name}
              />
              <Input
                variant="secondary"
                label="Descrição"
                type="text"
                name="description"
                {...description}
              />
              <Input
                variant="secondary"
                label="Valor"
                type="number"
                name="price"
                {...price}
              />
              <DropDown defaultValue={categoryName} selectedCategory={selectedCategoryId} onCategoryChange={handleCategoryChange} />
            </div>
            <Button name="Salvar Alterações" />
          </div>
        </form>
      )}
    </Container>
  );
};

export default EditProduct;

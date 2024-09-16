import { useState } from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../Input/Input";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import Switch from "../../Switch/Switch";
import { CREATE_PRODUCT } from "../../../api";
import "./styles.css";
import Button from "../../Button/Button";
import DropDown from "../../DropDown/index"
import { useSnackbar } from "react-simple-snackbar";

const CreateProduct = () => {
  const name = useForm();
  const description = useForm();
  const price = useForm();
  const stock = useForm();

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [imagePreview, setImagePreview] = useState("/src/assets/default.jpg");
  const [selectedFile, setSelectedFile] = useState(null);

  const [openSnackbar, closeSnackbar] = useSnackbar();

  const toggleAvailable = () => {
    setIsAvailable((v) => !v);
    if (isAvailable) stock.setValue(0);
    else stock.setValue("");
  };

  const handleImageClick = () => {
    document.getElementById("imageUpload").click();
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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecione uma imagem para o produto.");
      return;
    }

    if (!selectedCategoryId) {
      alert("Por favor, selecione uma categoria.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("price", parseFloat(price.value));
    formData.append("stock", parseInt(stock.value, 10));
    formData.append("categories", JSON.stringify([selectedCategoryId]));
    formData.append("image", selectedFile);

    try {
      const { url, options } = CREATE_PRODUCT(formData);
      const response = await fetch(url, options);
      const data = await response.json();

      if(response.ok) {
        openSnackbar('Login efetuado com sucesso!');
        setTimeout(() => {
            closeSnackbar();
        }, 3000);
    } else {
        openSnackbar('Dados incorretos!');
        setTimeout(() => {
            closeSnackbar();
        }, 3000);
    }
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  };

  return (
    <Container>
      <PageTitle title="Cadastrar Produto" />
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-main">
            <div className="card-main-image" onClick={handleImageClick}>
              <img
                className="product-img"
                src={imagePreview}
                alt="Product preview"
              />
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
            <DropDown selectedCategory={selectedCategoryId} onCategoryChange={handleCategoryChange} />
          </div>
          <Button
            name="Criar Produto"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Container>
  );
};

export default CreateProduct;

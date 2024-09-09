import useForm from "../../../hooks/useForm";
import Input from "../../Input/Input";
import Container from "../../Layout/Container";
import PageTitle from "../../PageTitle";
import "./styles.css";

const CreateProduct = () => {

  const name = useForm();
  const description = useForm();
  const price = useForm();

  return (
    <Container>
      <PageTitle title="Cadastrar Produto" />
      <div className="card">
        <div className="card-main">
          <div className="card-main-image">
            <img className="product-img" src="/src/assets/camisa.jpeg" alt="" />
          </div>
          <div className="card-main">
            
          </div>
        </div>
        <div className="card-settings">
          <Input variant="secondary" label="Nome do produto" type="text" name="name" {...name} />
          <Input variant="secondary" label="Descrição" type="text" name="description" {...description} />
          <Input variant="secondary" label="Valor" type="number" name="price" {...price} />
        </div>
      </div>
    </Container>
  );
};

export default CreateProduct;

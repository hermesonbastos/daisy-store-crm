import { IoIosClose } from "react-icons/io";
import PageTitle from "../../PageTitle/index";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./styles.css";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { CREATE_CATEGORY } from "../../../api";
import { useSnackbar } from "react-simple-snackbar";

const CategoryModal = ({ showModal, setShowModal }) => {
  const name = useForm();
  const description = useForm();
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const { request, data, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (name.validate() && description.validate()) {
      const body = JSON.stringify({
        name: name.value,
        description: description.value,
      });
      
      const { url, options } = CREATE_CATEGORY(body);
      const { response } = await request(url, options);
  
      if (response.ok) {
        setShowModal(false);
        openSnackbar('Categoria criada com sucesso!');
        setTimeout(() => {
            closeSnackbar();
        }, 3000);

        let body = document.querySelector("body");
        body.style.overflow = "auto";
      } else {
        openSnackbar('Erro ao criar categoria');
          setTimeout(() => {
              closeSnackbar();
          }, 3000);
      }
    }
  }

  return (
    <div className={showModal ? "category-modal-container-open" : "category-modal-container"}>
      <div className="category-modal">
        <div
          className="category-modal-icon-container"
          onClick={() => {
            setShowModal(false);
            let body = document.querySelector("body");
            body.style.overflow = "auto";
          }}
        >
          <IoIosClose className="category-modal-icon" />
        </div>
        <div className="category-modal-title">
          <PageTitle title="Criar Categoria" />
        </div>
        <form onSubmit={handleSubmit} className="modal-create-category">
          <Input label="NOME DA CATEGORIA" type="text" variant="secondary" {...name} />
          <Input label="DESCRIÇÃO" type="text" variant="secondary" {...description} />
          {error && <p className="error">{error}</p>}
          <div className="category-modal-button">
            <Button name={loading ? "Adicionando..." : "Adicionar"} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;

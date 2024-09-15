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

const products = [{}, {}, {}, {}];

const EditCategory = () => {
    const [categoryModal, setCategoryModal] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();
    const name = useForm();
    const description = useForm();
    const { request } = useFetch();
    const [openSnackbar, closeSnackbar] = useSnackbar();

    useEffect(() => {
        const { url, options } = DETAIL_CATEGORY(id);
        async function detailCategory() {
            const response = await request(url, options);
            if (response && response.json) {
                const { name: categoryName, description: categoryDescription } = response.json;
                if (!dataLoaded) {
                    name.setValue(categoryName);
                    description.setValue(categoryDescription);
                    setDataLoaded(true);
                }
            }
        }
        detailCategory();
    }, [id, request]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const body = JSON.stringify({
            name: name.value,
            description: description.value,
        });

        const { url, options } = UPDATE_CATEGORY(id, body);
        await request(url, options)
        .then(({ response }) => {
            if (response?.ok) {
                openSnackbar('Categoria atualizada com sucesso!');
                setTimeout(() => {
                    closeSnackbar();
                }, 3000);
            } else {
                openSnackbar('Erro ao atualizar categoria');
                setTimeout(() => {
                    closeSnackbar();
                }, 3000);
            }
        });
    };

    return (
        <Container>
            <ProductsModal showModal={categoryModal} setShowModal={setCategoryModal} />
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
                        <Button name="Salvar Alterações" onClick={() => {}} />
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
                        {products.map((order, index) => (
                            <ProductCard key={index} screen="onCategories" />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default EditCategory;

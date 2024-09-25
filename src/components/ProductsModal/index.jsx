import "./styles.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import PageTitle from "../PageTitle/index";
import { useEffect, useState } from "react";
import { FaRegSquare } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { GET_PRODUCTS } from "../../api";
import useFetch from "../../hooks/useFetch";

const SelectProductCard = ({ product, onSelect }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(prevChecked => !prevChecked);
    onSelect(product.id, !checked);
  };

  return (
    <div className="select-product-card">
      <div className="select-product-card-img">
        <img
          className="select-product-img"
          src={product?.images[0]?.image?.link || "../../assets/default.jpg"}
          alt=""
        />
      </div>
      <div className="select-product-card-content">
        <div className="select-product-data">
          <span className="select-product-data-number">{product?.id}</span>
          <span className="select-product-data-name">{product?.name}</span>
        </div>
        <div
          className="select-product-card-icon"
          onClick={handleCheck}
        >
          {checked ? (
            <FaCheckSquare size={30} color="#C4344C" />
          ) : (
            <FaRegSquare size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProductsModal = ({ showModal, setShowModal, hiddenProducts, onAddProducts }) => {
  const { data, error, loading, request } = useFetch();
  const hiddenProductsIds = hiddenProducts.map((product) => product?.id);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const { url, options } = GET_PRODUCTS();
    request(url, options);
  }, [request]);

  const visibleProducts = data?.filter(
    (product) => !hiddenProductsIds.includes(product?.id),
  );

  const handleSelectProduct = (productId, isSelected) => {
    setSelectedProducts(prevSelected => 
      isSelected ? [...prevSelected, productId] : prevSelected.filter(id => id !== productId)
    );
  };

  const handleAddProducts = () => {
    onAddProducts(selectedProducts);
    setShowModal(false);
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className={showModal ? "modal-container-open" : "modal-container"}>
      <div className="modal">
        <div
          className="modal-icon-container"
          onClick={() => {
            setShowModal(false);
            document.querySelector("body").style.overflow = "auto";
          }}
        >
          <IoIosClose className="modal-icon" />
        </div>
        <div className="modal-title">
          <PageTitle title="Adicionar Produtos" />
        </div>
        <div className="modal-list">
          {loading && <p>Carregando...</p>}
          {error && <p>Erro ao carregar produtos: {error.message}</p>}
          {visibleProducts && visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <SelectProductCard 
                key={index} 
                product={product} 
                onSelect={handleSelectProduct}
              />
            ))
          ) : (
            <p>Não há produtos disponíveis.</p>
          )}
        </div>
        <div className="modal-button">
          <Button name="Adicionar" onClick={handleAddProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
import './styles.css';
import Button from "../Button/Button"
import { IoIosClose } from "react-icons/io";
import PageTitle from "../PageTitle/index";

const productsModal = [{},{},{},{}];

const SelectProductCard = ({ product }) => {
  return (
    <div className="select-product-card">
            <div className="select-product-card-img">
                <img
                    className="select-product-img"
                    src="../../assets/camisa.jpeg"
                    alt=""
                />
            </div>
            <div className="select-product-card-content">
                <div className="select-product-data">
                    <span className="select-product-data-number">
                        N.º 001
                    </span>
                    <span className="select-product-data-name">Camisa vozão</span>
                </div>
            </div>
        </div>
  )
};

const ProductsModal = ({ showModal, setShowModal }) => {
  return <div className={showModal ? "modal-container-open" : "modal-container"}>
    <div className="modal">
      <div className="modal-icon-container">
        <IoIosClose />
      </div>
      <div className="modal-title">
        <PageTitle title="Adicionar Produtos"/>
      </div>
      <div className="modal-list">
        {productsModal.map((product, index) => (
          <SelectProductCard key={index} product={product} />
        ))}
      </div>
      <div className="modal-button">
        <Button name='Adicionar' onClick={() => {}} />
      </div>
    </div>
  </div>
}

export default ProductsModal;
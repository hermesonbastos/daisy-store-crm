import "./styles.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import PageTitle from "../PageTitle/index";
import { useState } from "react";
import { FaRegSquare } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { MdLinkOff } from "react-icons/md";

const productsModal = [{}, {}, {}, {}, {}, {}];

const SelectProductCard = ({ product }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="select-product-card">
      <div className="select-product-card-img">
        <img
          className="select-product-img"
          src="/src/assets/camisa.jpeg"
          alt=""
        />
      </div>
      <div className="select-product-card-content">
        <div className="select-product-data">
          <span className="select-product-data-number">N.º 001</span>
          <span className="select-product-data-name">Camisa vozão</span>
        </div>
        <div
          className="select-product-card-icon"
          onClick={() => setChecked((value) => !value)}
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

const ProductsModal = ({ showModal, setShowModal }) => {
  return (
    <div className={showModal ? "modal-container-open" : "modal-container"}>
      <div className="modal">
        <div
          className="modal-icon-container"
          onClick={() => {
            setShowModal(false);
            let body = document.querySelector("body");
            body.style.overflow = "auto";
          }}
        >
          <IoIosClose className="modal-icon" />
        </div>
        <div className="modal-title">
          <PageTitle title="Adicionar Produtos" />
        </div>
        <div className="modal-list">
          {productsModal.map((product, index) => (
            <SelectProductCard key={index} product={product} />
          ))}
        </div>
        <div className="modal-button">
          <Button name="Adicionar" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;

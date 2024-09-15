import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import PageTitle from "../../PageTitle/index"
import Button from "../../Button/Button"
import Input from "../../Input/Input"
import "./styles.css"

const CategoryModal = ({ showModal, setShowModal }) => {
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
          <div className="modal-create-category">
          <Input label="NOME DA CATEGORIA" type="text" variant="secondary"/>
          <Input label="DESCRIÇÃO" type="text" variant="secondary"/>
          </div>
          <div className="category-modal-button">
            <Button name="Adicionar" onClick={() => {}} />
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryModal;
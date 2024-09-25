import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Button from "../../Button/Button";
import ProductCard from "../../ProductCard";
import "./styles.css";
import { useSnackbar } from "react-simple-snackbar";
import { DELETE_ORDER, DETAIL_ORDER, UPDATE_PRODUCT_STOCK } from "../../../api";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Details = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    const { url, options } = DETAIL_ORDER(id);
    const detailOrder = async () => {
      await request(url, options);
    };
    detailOrder();
  }, [id, request]);

  const handleDiscard = async () => {
    const { url, options } = DELETE_ORDER(id);
    await request(url, options).then(() => {
        navigate("/orders");
        openSnackbar('Pedido cancelado!');
        setTimeout(() => {
            closeSnackbar();
        }, 3000);
    });
  };

  const handleConfirm = async () => {
    if (!data?.products) return;

    for (const { product, quantity } of data.products) {
      const updatedStock = (product.stock || 0) - (quantity || 0);
      const { url, options } = UPDATE_PRODUCT_STOCK(product.id, updatedStock);
      await request(url, options).then(() => {
        navigate("/orders");
        openSnackbar('Pedido Confirmado!');
        setTimeout(() => {
            closeSnackbar();
        }, 3000);
      });
    }
  };

  const products = data?.products || [];
  console.log(data);

  return (
    <div className="details-container">
      <span id="span1">Pedido N.º {data?.id}</span>
      <div className="details-info">
        <span>Nome do cliente: {data?.customer_name}</span>
        <span>Telefone: {data?.customer_phone}</span>
        <span>Data do pedido: {formatDate(data?.created_at)}</span>
      </div>
      <div className="details-product">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} screen="onOrder" />
        ))}
      </div>
      <div className="details-order">
        <span id="span2">Total:</span>
        <div className="details-btn">
          <Button
            variant="secondary"
            icon=""
            name="Descartar Pedido"
            onClick={handleDiscard}
          />
          <Button
            variant="primary"
            icon=""
            name="Confirmar Pedido"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

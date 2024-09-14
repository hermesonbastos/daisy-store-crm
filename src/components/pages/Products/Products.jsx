import { useEffect } from "react"
import useFetch from "../../../hooks/useFetch"
import Container from "../../Layout/Container"
import ProductCard from "../../ProductCard"
import './styles.css'
import { GET_PRODUCTS } from "../../../api";
import Button from "../../Button/Button"
import PageTitle from "../../PageTitle"
import { FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


const Products = () => {

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const { url, options } = GET_PRODUCTS();
    request(url, options);
  }, [request]);

  const products = data || [];
  console.log(products)

  return (
  <Container>
    <div className="products-list">
      <dir className="products-list-header">
        <PageTitle title="Produtos" />
        <div>
          <Button icon={<FaPlus />} name="Adicionar" variant="primary" onClick={() => navigate('/products/create')} />
        </div>
      </dir>
      {products.map((product, index) => {
        return (
          <ProductCard key={index} product={product} screen="onProducts"/>
        )
      })}
    </div>
  </Container>
)
}

export default Products
import { useEffect } from "react"
import useFetch from "../../../hooks/useFetch"
import Container from "../../Layout/Container"
import ProductCard from "../../ProductCard"
import './styles.css'
import { GET_PRODUCTS } from "../../../api";

const Products = () => {

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PRODUCTS();
    request(url, options);
  }, [request]);

  const products = data || [];
  console.log(products)

  return (
  <Container>
    <div className="products-list">
      {products.map((product, index) => {
        return (
          <ProductCard key={index} product={product} />
        )
      })}
    </div>
  </Container>
)
}

export default Products
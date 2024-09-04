import Container from "../../Layout/Container"
import ProductCard from "../../Products/ProductCard"

const products = [
  {},
  {},
  {},
  {},
]

const Products = () => {
  return (
    <Container>
      {products.map((product, index) => {
        return (
          <ProductCard key={index} product={product} />
        )
      })}
    </Container>
  )
}

export default Products
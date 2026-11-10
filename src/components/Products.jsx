import { Container } from "react-bootstrap";
import ProductList from "./ProductList.jsx";

function Products({ products, onAddToCart }) {
  return (
    <section id="products" className="py-5 products-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Catalogue</h2>
          <p className="text-secondary mb-0">{products.length} products</p>
        </div>
        <ProductList products={products} onAddToCart={onAddToCart} />
      </Container>
    </section>
  );
}

export default Products;

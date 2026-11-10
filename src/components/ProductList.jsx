import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return <p className="text-center text-secondary py-5">No products match</p>;
  }
  return (
    <Row xs={1} sm={2} lg={4} className="g-4">
      {products.map((p) => (
        <Col key={p.id}>
          <ProductCard {...p} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;

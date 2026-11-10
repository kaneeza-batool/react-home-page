import { Badge, Button, Card } from "react-bootstrap";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);

const ProductCard = ({ id, title, price, category, inStock, image, onAddToCart }) => {
  return (
    <Card className="product-card h-100 shadow-sm">
      <div className="product-card__image">
        <Card.Img variant="top" src={image} alt={title} loading="lazy" />
        {!inStock && (
          <Badge bg="secondary" className="product-card__badge">
            Out of stock
          </Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <small className="text-uppercase text-secondary fw-semibold product-card__category">
          {category}
        </small>
        <Card.Title className="fw-bold mt-1">{title}</Card.Title>
        <p className="product-card__price mb-3">{formatPrice(price)}</p>
        <Button
          type="button"
          variant={inStock ? "primary" : "outline-secondary"}
          className="w-100 mt-auto"
          disabled={!inStock}
          onClick={() => onAddToCart(id)}
        >
          {inStock ? "Add to Cart" : "Unavailable"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

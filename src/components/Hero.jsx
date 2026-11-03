import { Button, Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="hero py-5">
      <Container className="py-md-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-4 fw-bold mb-3">
              Turn a busy semester into a clear plan
            </h1>
            <p className="lead text-secondary mb-4">
              StudyNest keeps your classes, deadlines and study sessions in one
              calm place, so you always know what to do next.
            </p>
            <Button href="#features" variant="primary" size="lg">
              Explore features
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

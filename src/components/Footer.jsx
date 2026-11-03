import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer id="contact" className="py-4 border-top">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <small className="text-secondary">
          © 2026 StudyNest. All rights reserved.
        </small>
        <small className="text-secondary">hello@studynest.example</small>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
}

export default Footer;

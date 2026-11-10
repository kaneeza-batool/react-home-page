import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar
      expand="md"
      sticky="top"
      bg="white"
      className="border-bottom"
      collapseOnSelect
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold text-primary">
          StudyNest
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-nav" />
        <BootstrapNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

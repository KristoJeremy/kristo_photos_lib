import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>Kristo's Photos Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar

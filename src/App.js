import "./App.css";
import NavigationBar from "./components/NavBar";
import LandingSection from "./components/LandingSec";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="bg-navbar">
        <NavigationBar />
        <LandingSection />
      </div>
      <div className="Gallery" id="gallery">
        <Container className="d-flex justify-content-center align-items-center mt-5 mb-3">
          <Row>
            <Col>
              <div className="heading-text">Here's My Collections</div>
            </Col>
          </Row>
        </Container>
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;

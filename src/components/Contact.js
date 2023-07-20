import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <Container className="d-flex justify-content-center align-items-center mt-5 mb-3">
        <Row className="align-items-center">
          <Col>
            <div className="heading-text mb-3">Here's My Contact</div>
            <div className="paragraph-text">kristojeremy@gmail.com</div>
            <div className="paragraph-text">+62 811 100 7377</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

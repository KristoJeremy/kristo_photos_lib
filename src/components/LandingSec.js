import { Col, Container, Row } from 'react-bootstrap';

const LandingSection = () => {
    return(
        <div className='welcome-sec'>
        <Container className='text-white d-flex justify-content-center align-items-center'>
        <Row>
            <Col>
            <div className='welcome-text'>If you can see it,</div>
            <div className='welcome-text'>you can shoot it.</div>
            </Col>
        </Row>
        </Container>
    </div>

    )
}

export default LandingSection
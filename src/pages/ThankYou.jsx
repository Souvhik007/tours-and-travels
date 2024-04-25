import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
                  <div className="thank__you">
                    <span><i class="ri-checkbox-circle-line"></i></span>
                    <h1 className="mb-3 fw-semibold">Thank You!</h1>
                    <h3 className="mb-4">Your tour is booked..</h3>

                    <button className='btn primary__btn'><Link to='/home'>Back to  Home</Link>
                    </button>
                  </div>
            </Col>
        </Row>
    </Container>
  </section>


};



export default ThankYou
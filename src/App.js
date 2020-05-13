import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Component/Register'
import {Container, Row, Col} from 'react-bootstrap'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

function App() {
  return (
    <Container style={{paddingTop : "10%"}}>
      <Row className="justify-content-md-center"> 
        <Col xs lg="9">
        <Register />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

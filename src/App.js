import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Calculator from './components/Calculator'

function App() {
  return (
    
    <Container>
 <Row>
 <Col md={4}>
 
 </Col>
 <Col md={4} sm={12} lg={4}  >
 <div id="back">
 <Calculator/>
 </div>
 </Col>
 <Col md={4}>
 
 

 </Col>
 </Row>

    </Container>
    
    
      
  );
}

export default App;

import React, { useState } from 'react'
import { Toast, Row, Col, Button } from "react-bootstrap";

function Promo()  {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      <Row>
        <Col xs={6}>
          <Toast  style={{
      position: '',
      float: 'fixed',
      textAlign: 'center',
    }} show={showA} onClose={toggleShowA}>
            <Toast.Header>
              {/* <img
                src="https://images-na.ssl-images-amazon.com/images/I/61fGphnhucL._AC_SL1500_.jpg"
                className="rounded mr-2"
                alt=""
              /> */}
              <strong className="mr-auto"></strong>
              <small>16 mins ago</small>
            </Toast.Header>
            <Toast.Body style={{backgroundImage: "url(" + "https://images-na.ssl-images-amazon.com/images/I/61fGphnhucL._AC_SL1500_.jpg" + ")"}}>
                Place an order in the next 15 mins and received 10% off!
                Place an order in the next 15 mins and received 10% off!
                Place an order in the next 15 mins and received 10% off! </Toast.Body>
          </Toast>
        </Col>
        {/* <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
        <Col xs={6} className="my-1">
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowB}>
            Toggle Toast <strong>without</strong> Animation
          </Button>
        </Col> */}
      </Row>
    );
  }
  


export default Promo
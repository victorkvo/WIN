import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Forms extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"white", margin:"50px"}}>WE WOULD LOVE TO HEAR FROM YOU!!</h1>
                <Form style={{margin:"40px"}}>
                    <Form.Row>
    <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>First Name</Form.Label>
    <Form.Control type="fname" placeholder="Enter First Name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Last Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Last Name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  </Form.Row>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email address" />
    <Form.Text style={{color:"steel"}}>
      *We'll sell your email to the highest bidder.
    </Form.Text>
  </Form.Group>
​
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{color:"white"}}>Comments</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Please let us know how we are doing"/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check style={{color:"white", marginBottom:"0px"}} type="checkbox"  label="I love Js" />
  </Form.Group>
  <p style={{color:"steel", textAlign:"center", fontSize:"12px"}}>*I consent to having my info sold.</p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default Forms
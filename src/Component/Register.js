import React from 'react'
import {Card, Form, Button, DatePicker} from 'react-bootstrap'

export default function Register(){
    return(
        <Card style={{ display: "table"}}>
            <Card.Img src="/images/bookRegis.jpg" style={{ width: '40%', float : "left", height : "520px" }} />
            <Card.Body style={{ width: '60%', float: "left" }}>
                <Card.Title>Registration Info</Card.Title>
                <Form>
                    <Form.Group controlId="nameRegis">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="unameRegis">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="passRegis">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="ageRegis">
                        <Form.Control type="number" placeholder="Age" />
                    </Form.Group>
                    <Form.Group controlId="birtRegis">
                        <Form.Control type="text" placeholder="Birthday"/>
                    </Form.Group>
                    <Form.Group controlId="phoneRegis">
                        <Form.Control type="text" placeholder="Number Phone" />
                    </Form.Group>
                    <Form.Group controlId="addrRegis">
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
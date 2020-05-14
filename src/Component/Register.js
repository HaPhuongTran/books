import React, { Component } from 'react'
import {Card, Form, Button} from 'react-bootstrap'

class Register extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            username: '',
            password :'',
            age: '',
            birthday: '',
            phoneNum: '',
            address: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.name);
    }

    render() {
        return(
            <Card style={{ display: "table"}}>
                <Card.Img src="/images/bookRegis.jpg" style={{ width: '40%', float : "left", height : "520px" }} />
                <Card.Body style={{ width: '60%', float: "left" }}>
                    <Card.Title>Registration Info</Card.Title>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="nameRegis">
                            <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                        </Form.Group>
    
                        <Form.Group controlId="unameRegis">
                            <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} name="username" />
                        </Form.Group>
    
                        <Form.Group controlId="passRegis">
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password"/>
                        </Form.Group>
    
                        <Form.Group controlId="ageRegis">
                            <Form.Control type="number" placeholder="Age" value={this.state.age} onChange={this.handleChange} name="age"/>
                        </Form.Group>
                        <Form.Group controlId="birtRegis">
                            <Form.Control type="text" placeholder="Birthday" value={this.state.birthday} onChange={this.handleChange} name="birthday" />
                        </Form.Group>
                        <Form.Group controlId="phoneRegis">
                            <Form.Control type="text" placeholder="Phone Number" value={this.state.phoneNum} onChange={this.handleChange} name="phoneNum" />
                        </Form.Group>
                        <Form.Group controlId="addrRegis">
                            <Form.Control type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange} name="address" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default Register;
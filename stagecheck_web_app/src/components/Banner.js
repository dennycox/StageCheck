import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">StageCheck</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#internships">Alle stages</Nav.Link>
                <Nav.Link href="#companies">Bedrijven</Nav.Link>
                <Nav.Link href="#schools">Scholen</Nav.Link>
                <Nav.Link href="#students">Studenten</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Zoeken" className="mr-sm-2" />
                <Button variant="outline-primary">Stage zoeken</Button>
            </Form>
        </Navbar>
    )
}

export default Banner;
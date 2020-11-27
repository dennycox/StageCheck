import React from 'react';
import { Button, Container, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    return (
        <Container className="pt-3">
            <h3>Account aanmaken</h3>
            <Form>
                <Form.Group>
                    <Form.Label>E-mailadres</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                    <DropdownButton title="Soort gebruiker" variant="primary">
                        <Dropdown.Item href="#action/1">Student</Dropdown.Item>
                        <Dropdown.Item href="#action/2">Bedrijf</Dropdown.Item>
                        <Dropdown.Item href="#action/3">School</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Wachtwoord</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Herhaal wachtwoord</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary">Account aanmaken</Button>
                </Form.Group>
                <Link to={"/login"}>Heb je al een account? Log hier dan in</Link>
            </Form>
        </Container>
    )
}

export default Register;
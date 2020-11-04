import React from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <Container className="pt-3">
            <h3>Inloggen</h3>
            <Form>
                <Form.Group>
                    <Form.Label>E-mailadres</Form.Label>
                    <Form.Control type="email" placeholder="E-mailadres" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Wachtwoord</Form.Label>
                    <Form.Control type="password" placeholder="Wachtwoord" />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary">Inloggen</Button>
                </Form.Group>
                <Link to={"/register"}>Heb je nog geen account? Maak hier een account aan</Link>
            </Form>
        </Container>
    )
}

export default Login;
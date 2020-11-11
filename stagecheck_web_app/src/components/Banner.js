import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {

    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="40"
                    className="d-inline-block align-top"
                    alt="Stage Check logo"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Link to={"/login"}>
                    <Button variant="primary">Inloggen</Button>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Banner;
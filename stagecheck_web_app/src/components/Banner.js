import React, { Component } from 'react';
import logo from './logo.png';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Banner() {
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Vul hier je zoekterm in" className="mr-sm-2" />
                    </Form>
                    <NavDropdown title="Opleiding" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Alle opleidingen</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">ICT</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bedrijfskunde</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Verpleegkundige</NavDropdown.Item>
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Plaats of postcode" className="mr-sm-2" />
                    </Form>
                    <NavDropdown title="Straal" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Alle afstanden</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">3 km</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">5 km</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">10 km</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">15 km</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">20 km</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.7">25 km</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="light">Zoeken</Button>
                    <Nav.Link href="/stages">Alle stages</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Gebruikersnaam" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mijn profiel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Opgeslagen stages</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Uitloggen</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Banner;
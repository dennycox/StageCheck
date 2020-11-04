import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <DropdownButton title="Alle opleidingen" id="basic-nav-dropdown" variant="secondary">
                        <Dropdown.Item href="#action/1">Alle opleidingen</Dropdown.Item>
                        <Dropdown.Item href="#action/2">ICT</Dropdown.Item>
                        <Dropdown.Item href="#action/3">Bedrijfskunde</Dropdown.Item>
                        <Dropdown.Item href="#action/4">Verpleegkundige</Dropdown.Item>
                    </DropdownButton>
                    <Form inline>
                        <FormControl type="text" placeholder="Plaats of postcode" className="mr-sm-2" />
                    </Form>
                    <DropdownButton title="Alle afstanden" id="basic-nav-dropdown" variant="secondary">
                        <Dropdown.Item href="#action/1">Alle afstanden</Dropdown.Item>
                        <Dropdown.Item href="#action/2">3 km</Dropdown.Item>
                        <Dropdown.Item href="#action/3">5 km</Dropdown.Item>
                        <Dropdown.Item href="#action/4">10 km</Dropdown.Item>
                        <Dropdown.Item href="#action/5">15 km</Dropdown.Item>
                        <Dropdown.Item href="#action/6">20 km</Dropdown.Item>
                        <Dropdown.Item href="#action/7">25 km</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="light">Zoek</Button>
                    <Link to={"/internships"}>
                        <Button variant="primary">Alle stages</Button>
                    </Link>
                </Nav>
                <Nav>
                    <Link to={"/login"}>
                        <Button variant="primary">Inloggen</Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Banner;
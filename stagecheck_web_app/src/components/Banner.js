import React, { Component } from 'react';
import logo from './logo.png';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <Navbar bg="primary" variant="light">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    height="40"
                    className="d-inline-block align-top"
                    alt="Stage Check logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Form inline>
                    <FormControl type="text" placeholder="Vul hier je zoekterm in" className="mr-sm-2" />
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Opleiding
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Alle opleidingen</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ICT</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bedrijfskunde</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Verpleegkunde</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form inline>
                    <FormControl type="text" placeholder="Plaats of postcode" className="mr-sm-2" />
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Straal
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Alle afstanden</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">3 km</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">5 km</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">10 km</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">15 km</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">20 km</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">25 km</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="light">Zoeken</Button>
            </Nav>
            <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    Gebruikersnaam
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mijn profiel</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Opgeslagen stages</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Uitloggen</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    )
}

export default Banner;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterService from '../services/FilterService';
import InternshipService from '../services/InternshipService';

const Banner = ({globalInternships}) => {
    const [studies, setStudies] = useState([]);
    const [search, setSearch] = useState([]);
    var [internships, setInternships] = useState({globalInternships});

    useEffect(() => {
        retrieveStudies();
    }, []);

    const retrieveStudies = () => {
        FilterService.getAll()
            .then(response => {
                setStudies(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleChangeSearch = event => {
        const { value } = event.target;
        setSearch(value);
      };

    const handleSubmitSearch = event => {
        InternshipService.getAll(search)
            .then(response => {
                setInternships(response.data);
            })
            .catch(e => {
                console.log(e);
            });
      };

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
                    <Form inline onSubmit={handleSubmitSearch}>
                        <FormControl
                            type="text"
                            id="search"
                            placeholder="Vul hier je zoekterm in"
                            className="mr-sm-2"
                            onChange={handleChangeSearch}
                            name="search"
                        />
                    </Form>
                    {/* <DropdownButton title="Alle opleidingen" id="basic-nav-dropdown" variant="secondary">
                        <Dropdown.Item href="?studyId=0">Alle opleidingen</Dropdown.Item>
                        {studies.map((study) => (
                            <Dropdown.Item href={`?studyId=${study.id}`}>{study.name}</Dropdown.Item>
                        ))}
                    </DropdownButton> */}
                    <Form inline>
                        <FormControl as="select">
                            <option>Alle opleidingen</option>
                            {studies.map((study) => (
                                <option>{study.name}</option>
                            ))}
                        </FormControl>
                    </Form>
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
                    {/* <Button variant="light" onClick={handleChange}>Zoek</Button> */}
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
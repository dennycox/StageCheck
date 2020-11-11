import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterService from '../services/FilterService';

const FilterBar = ({ FilterInternships }) => {
    const [studies, setStudies] = useState([]);
    const [search, setSearch] = useState([]);
    const [studyId, setStudyId] = useState([]);

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

    const handleChangeStudyId = event => {
        const { value } = event.target;
        setStudyId(value);
        console.log(value);
    };

    const handleSubmitSearch = event => {
        FilterInternships(search, studyId);
    };

    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl
                            type="text"
                            id="search"
                            placeholder="Vul hier je zoekterm in"
                            className="mr-sm-2"
                            onChange={handleChangeSearch}
                            name="search"
                        />
                    </Form>
                    <Form inline>
                        <FormControl
                            as="select"
                            id="studyId"
                            onChange={handleChangeStudyId}
                            name="studyId"
                        >
                            <option value={0}>Alle opleidingen</option>
                            {studies.map((study) => (
                                <option value={study.id}>{study.name}</option>
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
                    <Link to={"/internships"}>
                        <Button variant="light" onClick={handleSubmitSearch}>Zoek stage</Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default FilterBar;
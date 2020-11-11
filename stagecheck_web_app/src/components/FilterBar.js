import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudyService from '../services/StudyService';

const FilterBar = ({ FilterInternships }) => {
    const [studies, setStudies] = useState([]);
    const [search, setSearch] = useState([]);
    const [studyId, setStudyId] = useState([]);

    useEffect(() => {
        retrieveStudies();
    }, []);

    const retrieveStudies = () => {
        StudyService.getAll()
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
                                <option key={study.id} value={study.id}>{study.name}</option>
                            ))}
                        </FormControl>
                    </Form>
                    <Form inline>
                        <FormControl type="text" placeholder="Plaats of postcode" className="mr-sm-2" />
                    </Form>
                    <Form inline>
                        <FormControl as="select">
                            <option>Alle afstanden</option>
                            <option>3 km</option>
                            <option>5 km</option>
                            <option>10 km</option>
                            <option>15 km</option>
                            <option>20 km</option>
                            <option>25 km</option>
                        </FormControl>
                    </Form>
                    <Button variant="light" onClick={handleSubmitSearch}>Zoek stage</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default FilterBar;
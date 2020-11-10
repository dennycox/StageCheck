import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';
import Internship from '../components/Internship';
import Banner from '../components/Banner';

const InternshipList = () => {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        retrieveInternships();
    }, []);

    const retrieveInternships = () => {
        InternshipService.getAll()
            .then(response => {
                setInternships(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveInternshipsBySearch = (search) => {
        InternshipService.getAllSearch(search)
            .then(response => {
                setInternships(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Banner SearchInternships={retrieveInternshipsBySearch} />
            <Container className="pt-3">
                <Link to={"/add"}>
                    <Button variant="primary">Stage toevoegen</Button>
                </Link>
                {internships.map((internship) => (
                    <Internship key={internship.id} internship={internship} />
                ))}
            </Container>
        </div>
    )
}

export default InternshipList;
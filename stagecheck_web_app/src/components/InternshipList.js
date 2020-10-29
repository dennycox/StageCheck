import React, { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';

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

    return (
        <Container className="pt-3">
            <Link to={"/add"}>
                <Button variant="primary">Stage toevoegen</Button>
            </Link>
            {internships.map((internship) => (
                <div key={internship.id}>
                    <Card className="my-3">
                        <Card.Body>
                            <Card.Title>{internship.title}</Card.Title>
                            <Card.Text>{internship.description}</Card.Text>
                            <Link to={"/details/" + internship.id}>Meer informatie</Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Container>
    )
}

export default InternshipList;
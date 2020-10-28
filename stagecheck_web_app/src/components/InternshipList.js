import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
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
        <div>
            <Link to={"/add"}>
                <Button variant="primary">Toevoegen</Button>
            </Link>
            <ul>
                {internships && internships.map((internship) => (
                    <Card className="my-3">
                        <Card.Body>
                            <Card.Title>{internship.title}</Card.Title>
                            <Card.Text>{internship.description}</Card.Text>
                            <Card.Link to={"/internships/" + internship.id}>Meer informatie</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </div>
    )
}

export default InternshipList;

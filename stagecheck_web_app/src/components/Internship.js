import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Internship({ internship, deleteInternship }) {
    const handleDelete = () => {
        deleteInternship(internship);
    };

    return (
        <Card style={{ width: '60rem' }} className="my-3">
            <Card.Body>
                <Card.Title>{internship.title}</Card.Title>
                <Card.Text>{internship.description}</Card.Text>
                <Card.Link href="#">Meer informatie</Card.Link>
                <Card.Link href="#">Contact</Card.Link>
            </Card.Body>
            <Card.Footer>
                <Button onClick={handleDelete}>Verwijderen</Button>
            </Card.Footer>
        </Card>
    )
}

export default Internship;
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Internship({ internship }) {
    return (
        <Card style={{ width: '60rem' }}>
            <Card.Body>
                <Card.Title>{internship.title}</Card.Title>
                <Card.Text>{internship.description}</Card.Text>
                <Card.Link href="#">Meer informatie</Card.Link>
                <Card.Link href="#">Contact</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Internship;
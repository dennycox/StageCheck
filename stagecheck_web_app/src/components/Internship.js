import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Internship = ({ internship, ...props }) => {

    return (
        <Card className="my-3" data-testid="card" {...props}>
            <Card.Body>
                <Card.Title>{internship.title}</Card.Title>
                <Card.Text>{internship.description}</Card.Text>
                <Link to={"/details/" + internship.id}>Meer informatie</Link>
            </Card.Body>
        </Card>
    )
}

export default Internship;
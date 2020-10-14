import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

function Internship({ internship, deleteInternship, updateInternship }) {
    const handleDelete = () => {
        deleteInternship(internship);
    };
    const handleUpdate = () => {
        updateInternship(internship);
    };

    let { path, url } = useRouteMatch();

    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{internship.title}</Card.Title>
                <Card.Text>{internship.description}</Card.Text>
                <Card.Link href={`${url}/${internship.id}`}>Meer informatie</Card.Link>
                <Card.Link href="#">Contact</Card.Link>
            </Card.Body>
            <Card.Footer>
                <Link to={`${url}/${internship.id}/update`}>
                    <Button variant="outline-primary">Wijzig</Button>
                </Link>            
                <Button onClick={handleDelete}>Verwijderen</Button>
            </Card.Footer>
        </Card>
    )
}

export default Internship;
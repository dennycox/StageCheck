import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link,
    useRouteMatch,
} from 'react-router-dom';

function Internship({ internship, deleteInternship }) {
    const handleDelete = () => {
        deleteInternship(internship);
    };

    let { url } = useRouteMatch();

    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{internship.title}</Card.Title>
                <Card.Text>{internship.description}</Card.Text>
                <Card.Link href={`${url}/${internship.id}/details`}>Meer informatie</Card.Link>
            </Card.Body>
            <Card.Footer>
                <Link to={`${url}/${internship.id}/update`}>
                    <Button variant="primary">Wijzig</Button>
                </Link>            
                <Button onClick={handleDelete}>Verwijderen</Button>
            </Card.Footer>
        </Card>
    )
}

export default Internship;
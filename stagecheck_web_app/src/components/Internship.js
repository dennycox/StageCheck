import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Internship extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>One Squad ICT BV</Card.Title>
                    <Card.Text>
                        Wij hebben leerzame en uitdagende stageplekken beschikbaar
                        voor HBO ICT studenten
                    </Card.Text>
                    <Card.Link href="#">Meer informatie</Card.Link>
                    <Card.Link href="#">Contact</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default Internship;
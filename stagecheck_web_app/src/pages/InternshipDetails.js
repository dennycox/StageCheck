import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';
import 'bootstrap/dist/css/bootstrap.min.css';

const InternshipDetails = props => {
    const initialInternshipState = {
        id: null,
        title: "",
        description: "",
    };
    const [currentInternship, setCurrentInternship] = useState(initialInternshipState);

    const getInternship = id => {
        InternshipService.get(id)
            .then(response => {
                setCurrentInternship(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getInternship(props.match.params.id);
    }, [props.match.params.id]);

    const deleteInternship = () => {
        InternshipService.remove(currentInternship.id)
            .then(response => {
                props.history.push("/internships");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Container className="pt-3">
                <Link to={"/internships"}>
                    <Button variant="primary">Terug</Button>
                </Link>
                <h3>{currentInternship.title}</h3>
                <p>{currentInternship.description}</p>
                <Link to={"/update/" + currentInternship.id}>
                    <Button variant="primary">Wijzig</Button>
                </Link>
                <Button onClick={deleteInternship}>Verwijderen</Button>
            </Container>
        </div>
    )
}

export default InternshipDetails;
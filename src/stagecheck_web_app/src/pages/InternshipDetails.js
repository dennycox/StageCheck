import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Company from '../components/Company';

const InternshipDetails = props => {
    const initialInternshipState = {
        id: null,
        title: "",
        description: "",
        studyId: null,
        companyId: null,
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
        <Container className="pt-3">
            <Link to={"/internships"}>
                <Button variant="primary">Terug</Button>
            </Link>
            <h3 data-testid="internship-details-title">{currentInternship.title}</h3>
            <p>{currentInternship.description}</p>
            {currentInternship.companyId ? (
                <Company companyId={currentInternship.companyId} />
            ) : (<div />)}
            <Link to={"/update/" + currentInternship.id}>
                <Button variant="primary">Wijzig</Button>
            </Link>
            <Button onClick={deleteInternship}>Verwijderen</Button>
        </Container>
    )

}

export default InternshipDetails;
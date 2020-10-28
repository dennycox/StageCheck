import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Internship = props => {
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
        <div className="col-md-6">
            <Link to={"/internships"}>
                <Button variant="primary">Terug</Button>
            </Link>
            <h3>{currentInternship.title}</h3>
            <p>{currentInternship.description}</p>
            <Link to={"/update/" + currentInternship.id}>
                <Button variant="primary">Wijzig</Button>
            </Link>
            <Button onClick={deleteInternship}>
                Verwijderen
        </Button>
        </div>
    )
}

export default Internship;
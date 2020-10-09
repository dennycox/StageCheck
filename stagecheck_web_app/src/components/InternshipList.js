import React, { useState, useEffect } from "react";
import axios from "axios";
import Internship from "./Internship";
import AddInternshipForm from "./AddInternshipForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const InternshipsIri = "https://localhost:44330/api/Internships/"

function InternshipList() {
    const [internshipList, setInternshipList] = useState([]);

    useEffect(() => {
        axios.get(InternshipsIri).then((res) => {
            const newInternshipList = res.data;
            setInternshipList(newInternshipList);
        });
    }, []);

    const addInternship = (internship) => {
        axios.post(InternshipsIri, internship).then((res) => {
            const newInternship = res.data;
            const newInternshipList = [...internshipList, newInternship];
            setInternshipList(newInternshipList);
        });
    };

    const deleteInternship = (internship) => {
        const id = internship.id;

        axios.delete(InternshipsIri + id).then(() => {
            const newInternshipList = internshipList.filter((filterInternship) => filterInternship.id !== internship.id);
            setInternshipList(newInternshipList);
        });
    };

    let match = useRouteMatch();

    return (
        <Container className="my-3">
            <Row>
                <Col>
                    <Switch>
                        <Route path={`${match.url}/create`}>
                            <Link to={`${match.url}`}>
                                <Button variant="outline-primary">Terug</Button>
                            </Link>
                            <AddInternshipForm addInternship={addInternship} />
                        </Route>
                        <Route path="/">
                            <Link to={`${match.url}/create`}>
                                <Button variant="primary">Stage toevoegen</Button>
                            </Link>
                            {internshipList.map(internship => (
                                    <Internship key={internship.id} internship={internship} deleteInternship={deleteInternship} />
                                ))}
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}

export default InternshipList;

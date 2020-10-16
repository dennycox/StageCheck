import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Internship from './Internship';
import AddInternshipForm from './AddInternshipForm';
import UpdateInternshipForm from './UpdateInternshipForm';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InternshipDetails from './InternshipDetails';

const InternshipsUrl = "https://localhost:44330/api/Internships/"

function InternshipList() {
    const [internshipList, setInternshipList] = useState([]);

    useEffect(() => {
        axios.get(InternshipsUrl).then((res) => {
            const newInternshipList = res.data;
            setInternshipList(newInternshipList);
        });
    }, []);

    const getInternship = async (id) => {
        var internship;
        
        await axios.get(InternshipsUrl + id).then((res) => {
            internship = res.data;
        });
        
        return internship;
    };

    const addInternship = (internship) => {
        axios.post(InternshipsUrl, internship).then((res) => {
            const newInternship = res.data;
            const newInternshipList = [...internshipList, newInternship];
            setInternshipList(newInternshipList);
        });
    };

    const deleteInternship = (internship) => {
        const id = internship.id;

        axios.delete(InternshipsUrl + id).then(() => {
            const newInternshipList = internshipList.filter((filterInternship) => filterInternship.id !== internship.id);
            setInternshipList(newInternshipList);
        });
    };

    const updateInternship = (internship) => {
        const id = internship.id;

        axios.put(InternshipsUrl + id, internship).then((res) => {
            const updatedInternship = res.data;
            const newInternshipList = [...internshipList, updatedInternship];
            setInternshipList(newInternshipList);
        });
    };

    let { path, url } = useRouteMatch();

    return (
        <Container className="my-3">
            <Row>
                <Col>
                    <Switch>
                        {/* Create */}
                        <Route path={`${path}/create`}>
                            <Link to={`${url}`}>
                                <Button variant="outline-primary">Terug</Button>
                            </Link>
                            <AddInternshipForm addInternship={addInternship} />
                        </Route>
                        {/* Update */}
                        <Route path={`${path}/:id/update`}>
                            <Link to={`${url}`}>
                                <Button variant="outline-primary">Terug</Button>
                            </Link>
                            <UpdateInternshipForm updateInternship={updateInternship} getInternship={getInternship} />
                        </Route>
                        {/* Details */}
                        <Route path={`${path}/:id/details`}>
                            <Link to={`${url}`}>
                                <Button variant="outline-primary">Terug</Button>
                            </Link>
                            <InternshipDetails getInternship={getInternship} />
                        </Route>
                        {/* Internships */}
                        <Route path={`${path}`}>
                            <Link to={`${url}/create`}>
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

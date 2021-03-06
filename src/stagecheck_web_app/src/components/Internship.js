import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CompanyService from '../services/CompanyService';
import { MdLocationOn } from "react-icons/md";

const Internship = ({ internship, index, ...props }) => {

    const [company, setCompany] = useState([]);

    useEffect(() => {
        getCompany(internship.companyId);
    }, [internship.companyId]);

    const getCompany = id => {
        CompanyService.get(id)
            .then(response => {
                setCompany(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Card className="my-3" {...props}>
            <Card.Body>
                {company.id ? (
                    <Card.Title>{company.name}</Card.Title>
                ) : (<div />)}
                <Card.Text data-testid={"internship-card-title" + index}>{internship.title}</Card.Text>
                {company.id ? (
                    <Card.Text><MdLocationOn color="red" /> {company.streetName} {company.houseNumber} {company.houseNumberAddition}, {company.zipCode} {company.city}</Card.Text>
                ) : (<div />)}
                <Link to={"/details/" + internship.id}>Meer informatie</Link>
            </Card.Body>
        </Card>
    )
}

export default Internship;
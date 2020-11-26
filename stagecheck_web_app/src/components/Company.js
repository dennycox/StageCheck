import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CompanyService from '../services/CompanyService'
import { MdLocationOn } from "react-icons/md";

const Company = ({ companyId }) => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        getCompany(companyId);
    }, [companyId]);

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
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text><MdLocationOn color="red" /> {company.streetName} {company.houseNumber} {company.houseNumberAddition}, {company.zipCode} {company.city}</Card.Text>
                <Card.Text>{company.webSite}</Card.Text>
                <Card.Text>{company.phoneNumber}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Company;
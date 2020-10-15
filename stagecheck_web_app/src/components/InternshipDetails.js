import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InternshipDetails({ getInternship }) {

    return (
        <div className="col-md-6">
            <h2>{getInternship.title}</h2>
            <p>{getInternship.description}</p>
        </div>
    )
}

export default InternshipDetails;
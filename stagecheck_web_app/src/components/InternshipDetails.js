import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams
} from 'react-router-dom';

function InternshipDetails({ getInternship }) {
    let { id } = useParams();
    const internship = getInternship(id);
console.log(internship);
    return (
        <div className="col-md-6">
            <h2>{internship.title}</h2>
            <p>{internship.description}</p>
        </div>
    )
}

export default InternshipDetails;
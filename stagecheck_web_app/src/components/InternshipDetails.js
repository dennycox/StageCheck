import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams
} from 'react-router-dom';

const InternshipsUrl = "https://localhost:44330/api/Internships/";

function InternshipDetails() {
    var { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(InternshipsUrl + id).then(res => {
            const internship = res.data;
            setTitle(internship.title);
            setDescription(internship.description);
        })
    }, [id]);

    return (
        <div className="col-md-6">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default InternshipDetails;
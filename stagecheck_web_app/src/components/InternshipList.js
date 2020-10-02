import React, { useState, useEffect } from "react";
import axios from "axios";

const InternshipsIri = "https://localhost:44330/api/Internships/"

function InternshipList() {
    const [internshipList, setInternshipList] = useState([]);

    useEffect(() => {
        axios.get(InternshipsIri).then((res) => {
            console.log(res)
            //setInternshipList(res.data);
        });
    }, []);

    return (
        <div>
            <ul>
                {internshipList.map(internship => (
                    <li key={internship.id}>{internship.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default InternshipList;
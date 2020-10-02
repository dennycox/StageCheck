import React, { useState, useEffect } from "react";
import axios from "axios";
import Internship from "./Internship";

const InternshipsIri = "https://localhost:44330/api/Internships/"

function InternshipList() {
    const [internshipList, setInternshipList] = useState([]);

    useEffect(() => {
        axios.get(InternshipsIri).then((res) => {
            console.log(res)
            setInternshipList(res.data);
        });
    }, []);

    return (
        <div>
            {internshipList.map(internship => (
                <Internship internship={internship} />
            ))}
        </div>
    )
}

export default InternshipList;
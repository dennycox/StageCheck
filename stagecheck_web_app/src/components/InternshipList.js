import React, { useState, useEffect } from "react";
import axios from "axios";
import Internship from "./Internship";
import AddInternshipForm from "./AddInternshipForm";

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

    return (
        <div>
            {internshipList.map(internship => (
                <Internship key={internship.id} internship={internship} deleteInternship={deleteInternship} />
            ))}
            <AddInternshipForm addInternship={addInternship} />
        </div>
    )
}

export default InternshipList;
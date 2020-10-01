import React, { useState, useEffect } from "react";
import axios from "axios";

const InternshipsIri = "https://localhost:44330/api/Internships"

function InternshipList() {
    const [internshipList, setInternshipList] = unseState([]);

    useEffect(() => {
        axios.get(InternshipsIri).then((res) => {
            const newInternshipList = res.data;
            setInternshipList(newInternshipList);
        });
    }, []);

    const addInternship = (ip) => {
        
    }
}
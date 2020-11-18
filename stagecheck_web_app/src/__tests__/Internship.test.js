import axios from 'axios';
import InternshipService from '../services/InternshipService';
import { render, cleanup, waitFor, screen } from "@testing-library/react";
import App from '../App';
import React from 'react';

jest.mock('axios');

describe("Internship tests", () => {
    it.skip("Should fetch internships", async () => {
        const internships = [
            {
                id: 1,
                title: "Test first internship title",
                description: "Test first internship description"
            },
            {
                id: 2,
                title: "Test second internship title",
                description: "Test second internship description"
            }
        ]
        const resp = {data: internships};
        axios.get.mockResolvedValue(resp);

        return InternshipService.getAll().then(data => expect(data).toEqual(internships));
    });

    it("Should fetch internships", async () => {
        render(<App />)
        expect(screen).toMatchInlineSnapshot();
    });
});
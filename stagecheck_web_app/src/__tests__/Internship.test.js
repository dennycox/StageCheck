import axios from 'axios';
import InternshipService from '../services/InternshipService';

jest.mock('axios');

describe("Internship tests", () => {
    it("Should fetch internships", async () => {
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
});
import { getByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateInternship from '../pages/UpdateInternship';
import InternshipService from '../services/InternshipService';
import React from 'react';

jest.mock('../services/InternshipService');

describe("Update internships test", () => {
    it.skip("Successfully updates and submits form", () => {
        const mockFn = InternshipService.get.mockImplementation(data => {
            console.log(data);
            return {
                data: {
                    id: 1,
                    title: "Test internship title",
                    description: "Test internship description"
                }
            };
        });

        render(<MemoryRouter initialEntries={["/update/1"]}><UpdateInternship match={{ params: { id: 1 } }} /></MemoryRouter>);

        const inputTitle = screen.getByTestId("update-internship-title-input");
        fireEvent.change(inputTitle, { target: { value: "Test internship title" } });
        expect(inputTitle.value).toBe("Test internship title");

        const inputDescription = screen.getByTestId("update-internship-description-input");
        fireEvent.change(inputDescription, { target: { value: "Test internship description" } });
        expect(inputDescription.value).toBe("Test internship description");

        const submit = screen.getByTestId("update-internship-submit")
        fireEvent.click(submit);
        expect(mockFn).toHaveBeenCalledWith({ title: "Test internship title", description: "Test internship description" });
    });
}); 
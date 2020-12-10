import { getByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddInternship from '../pages/AddInternship';
import InternshipService from '../services/InternshipService';
import React from 'react';

jest.mock('../services/InternshipService');

describe("Add internships test", () => {
    it("Successfully fills in and submits form", () => {
        const mockFn = InternshipService.create.mockImplementation(data => {
            console.log(data);
            return {
                data: {
                    id: 1,
                    title: "Test internship title",
                    description: "Test internship description"
                }
            };
        });

        render(<MemoryRouter initialEntries={["/add"]}><AddInternship /></MemoryRouter>);

        const inputTitle = screen.getByTestId("add-internship-title-input");
        fireEvent.change(inputTitle, { target: { value: "Test internship title" } });
        expect(inputTitle.value).toBe("Test internship title");

        const inputDescription = screen.getByTestId("add-internship-description-input");
        fireEvent.change(inputDescription, { target: { value: "Test internship description" } });
        expect(inputDescription.value).toBe("Test internship description");

        const submit = screen.getByTestId("add-internship-submit")
        fireEvent.click(submit);
        expect(mockFn).toHaveBeenCalledWith({ title: "Test internship title", description: "Test internship description" });
    });
}); 
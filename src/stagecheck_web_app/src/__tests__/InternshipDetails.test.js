import { getByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InternshipDetails from '../pages/InternshipDetails';
import InternshipService from '../services/InternshipService';
import React from 'react';
import { act } from 'react-dom/test-utils';

jest.mock('../services/InternshipService');

describe("InternshipDetails test", () => {
    it("Successfully renders internship details", async () => {
        const mockFn = InternshipService.get.mockImplementation(() => Promise.resolve({
            data:
            {
                id: 1,
                title: "Test internship title",
                description: "Test internship description"
            }
        }));

        await act(async () => { render(<MemoryRouter initialEntries={["/details/1"]}><InternshipDetails match={{ params: { id: 1 } }} /></MemoryRouter>) });

        expect(mockFn).toHaveBeenCalledWith(1);

        const title = screen.getByTestId("internship-details-title");
        expect(title.textContent).toBe("Test internship title");
    });
}); 
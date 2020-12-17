import InternshipService from '../services/InternshipService';
import { getByTestId, render, screen, waitFor, fireEvent } from "@testing-library/react";
import InternshipList from '../pages/InternshipList';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

jest.mock('../services/InternshipService');

describe("Internshiplist test", () => {
  it("Successfully renders list of internships", async () => {
    var mockFn = InternshipService.getAll.mockImplementation(() => Promise.resolve({
      data:
        [
          {
            id: 1,
            title: "Test internship title 1",
            description: "Test internship description 1"
          },
          {
            id: 2,
            title: "Test internship title 2",
            description: "Test internship description 2"
          }
        ]
    }));

    await act(async () => { render(<MemoryRouter initialEntries={["/internships"]}><InternshipList /></MemoryRouter>) });

    const internshipTitle0 = screen.getByTestId("internship-card-title0");
    expect(internshipTitle0.textContent).toBe("Test internship title 1");

    const internshipTitle1 = screen.getByTestId("internship-card-title1");
    expect(internshipTitle1.textContent).toBe("Test internship title 2");

    expect(mockFn).toHaveBeenCalled();
  });
});

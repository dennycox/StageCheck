import InternshipService from '../services/InternshipService';
import { getByTestId, render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from '../App';
import InternshipList from '../pages/InternshipList';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/InternshipService');

describe("Show Internshiplist test", () => {
  it.skip("Successfully Renders internships", () => {
    const mockFn = InternshipService.getAll.mockImplementation(data => {
      console.log(data);
      return {
        data: [{
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
      };
    });

    const testInternships = [{
      id: 1,
      title: "Test internship title 1",
      description: "Test internship description 1",
    },
    {
      id: 2,
      title: "Test internship title 2",
      description: "Test internship description 2",
    }];

    render(<MemoryRouter initialEntries={["/internships"]}><InternshipList internship={testInternships} /></MemoryRouter>);

    const internshipTitles = screen.getAllByTestId("internship-card-title").map(t => t.testContent);
    expect(internshipTitles.values).toBe(
      [
        "Test internship title 1",
        "Test internship title 2",
      ]
    );

    expect(mockFn).toHaveBeenCalledWith(
      [{ title: "Test internship title 1", description: "Test internship description 1" },
      { title: "Test internship title 2", description: "Test internship description 2" }]);
  });
});

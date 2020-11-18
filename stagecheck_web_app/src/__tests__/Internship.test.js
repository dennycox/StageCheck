import axios from "axios";
import InternshipService from "../services/InternshipService";
import { render, cleanup, waitFor, screen } from "@testing-library/react";
import App from "../App";
import React from "react";

jest.mock("axios");

describe("Internship tests", () => {
  it.skip("Should fetch internships", async () => {
    const internships = [
      {
        id: 1,
        title: "Test first internship title",
        description: "Test first internship description",
      },
      {
        id: 2,
        title: "Test second internship title",
        description: "Test second internship description",
      },
    ];
    const resp = { data: internships };
    axios.get.mockResolvedValue(resp);

    return InternshipService.getAll().then((data) =>
      expect(data).toEqual(internships)
    );
  });

  it("Should fetch internships", async () => {
    render(<App />);
    expect(screen).toMatchInlineSnapshot(`
      Object {
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
      }
    `);
  });
});

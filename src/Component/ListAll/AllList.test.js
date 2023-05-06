import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllList from "./AllList";

describe("AllList", () => {
  const testData = {
    id: 1,
    title: "Test Title",
    question: "Test Question",
    tag: "Test Tag",
    created: "2021-01-01",
    modified: "2021-01-02",
    views: 10,
    vote: 5,
    author: "Test Author",
    answer: [],
  };

  it("should render AllList component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AllList {...testData} />
      </BrowserRouter>
    );
    expect(getByText(testData.title)).toBeInTheDocument();
    expect(getByText(testData.question)).toBeInTheDocument();
    expect(getByText(testData.author)).toBeInTheDocument();
  });
});

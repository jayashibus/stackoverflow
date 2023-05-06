import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import List from "./List";

describe("List component", () => {
  const mockStore = configureStore([]);

  const mockData = {
    datas: [
      { id: 1, title: "Test question 1" },
      { id: 2, title: "Test question 2" },
      { id: 3, title: "Test question 3" },
    ],
  };

  it("renders the component with the correct data", () => {
    const store = mockStore({ allData: mockData });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <List />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("All Questions")).toBeInTheDocument();
    expect(
      screen.getByText(`${mockData.datas.length} Question`)
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("all-list")).toHaveLength(
      mockData.datas.length
    );
  });

  it("updates the page number when handlePageChange is called", () => {
    const store = mockStore({ allData: mockData });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <List />
        </BrowserRouter>
      </Provider>
    );

    const newPageNumber = 2;

    const pagination = screen.getByTestId("pagination");
    const pageButton = screen.getByText(newPageNumber);

    expect(pagination).toBeInTheDocument();
    expect(pageButton).toBeInTheDocument();

    pageButton.click();

    expect(store.getActions()).toEqual([
      { type: "SET_CURRENT_PAGE", payload: newPageNumber },
    ]);
  });
});

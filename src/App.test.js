import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import initialData from "./Data/data";

describe("App component", () => {
  const mockStore = configureStore([]);

  it("dispatches the initial data to the Redux store", () => {
    const store = mockStore({ allData: { datas: initialData } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(store.getActions()).toEqual([
      { type: "SET_DATAS", payload: initialData.datas },
    ]);
  });
});

import "./App.css";
import { useDispatch } from "react-redux";
import { setDatas } from "./Redux/actions/dataAction";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskQuestion from "./Component/ListAll/AskQuestion";

import Detail from "./Component/ListAll/Detail";
import List from "./Component/ListAll/List";
import initialData from "./Data/data";

function App() {
  // Dispatching the Initial Data to Redux Store
  const dispatch = useDispatch();
  dispatch(setDatas(initialData));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/askquestion" element={<AskQuestion />}></Route>
          <Route path="/detail/:qid" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

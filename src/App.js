import "./App.css";
import { useDispatch } from "react-redux";
import { setDatas } from "./redux/actions/dataAction";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskQuestion from "./Component/ListAll/AskQuestion";

import Detail from "./Component/ListAll/Detail";
import List from "./Component/ListAll/List";
import initialData from "./Data/data";
import { useSelector } from "react-redux";

function App() {
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

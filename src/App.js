import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskQuestion from "./Component/ListAll/AskQuestion";

import Detail from "./Component/ListAll/Detail";
import List from "./Component/ListAll/List";
import initialData from "./Data/data";

function App() {
  const [data, setData] = useState(initialData);
  const handleVote = (postId, sign) => {
    const updatedPosts = data.map((p) => {
      if (p.id === postId) {
        if (sign == "increment") {
          return {
            ...p,
            vote: p.vote + 1,
          };
        } else {
          return {
            ...p,
            vote: p.vote - 1,
          };
        }
      } else {
        return p;
      }
    });
    setData(updatedPosts);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List data={data} />}></Route>
          <Route path="/askquestion" element={<AskQuestion />}></Route>
          <Route
            path="/detail/:qid"
            element={<Detail data={data} handleVote={handleVote} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

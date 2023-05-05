import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskQuestion from "./Component/ListAll/AskQuestion";

import Detail from "./Component/ListAll/Detail";
import List from "./Component/ListAll/List";
import data from "./Data/data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List data={data} />}></Route>
          <Route path="/askquestion" element={<AskQuestion />}></Route>
          <Route path="/detail/:qid" element={<Detail data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

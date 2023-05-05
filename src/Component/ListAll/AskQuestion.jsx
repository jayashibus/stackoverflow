import React, { useState } from "react";

const AskQuestion = () => {
  const [title, setTitle] = useState();
  const [question, setQuestion] = useState();

  const submitHandler = () => {
    alert("shibu");
    if (title.length > 255) {
      return false;
    }
  };

  return (
    <div>
      <div className="Askquestion-container">
        <div>
          <h1>Ask a public Question</h1>
        </div>
        <div className="Askquestion Border-gray Padding">
          <h3>Title</h3>
          Be specific and imagine you’re asking a question to another person.
          <input
            type="text"
            placeholder="e.g Is there an function for finding the index of the element a vector"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="divider-noborder "> </div>

        <div className="Askquestion Border-gray Padding">
          <h3>What are the details of your problem?</h3>
          <label>
            Introduce the problem and expand on what you put in the title.
            Minimum
          </label>
          20 characters.
          <textarea
            id="question"
            name="question"
            rows="5"
            cols="33"
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="Margin-top">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default AskQuestion;

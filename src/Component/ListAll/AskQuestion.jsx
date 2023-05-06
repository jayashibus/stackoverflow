import React, { useState } from "react";
import existingRecord from "../../Data/data";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");

  let previousId = existingRecord.length;

  function handleInputChange(event) {
    const value = event.target.value;
    if (value.length <= 255) {
      setTitle(value);
    }
  }

  const remainingChars = 255 - title.length;
  const submitHandler = (e) => {
    e.preventDefault();

    const newRecord = [
      {
        id: Math.floor(Math.random() * 10000),
        title: title,
        question: question,
        tag: "javascript",
        created: "6-May-2023",
        modified: "6-May-2023",
        views: 0,
        vote: 0,
        author: "Shibu",
        answer: [],
      },
    ];
    const updatedRecord = {
      ...existingRecord,
      ...newRecord,
    };

    console.log(updatedRecord);

    if (updatedRecord) {
      setMessage("Created sucessfully");
    }
  };

  return (
    <div>
      <form>
        <div className="Askquestion-container">
          <div>
            <h1>Ask a public Question</h1>
          </div>
          <div className="Askquestion Border-gray Padding">
            <h3>Title</h3>
            Be specific and imagine you’re asking a question to another person.
            <input
              name="title"
              type="text"
              placeholder="e.g Is there an function for finding the index of the element a vector"
              onChange={handleInputChange}
              value={title}
              maxLength="255"
            ></input>
            <label className="red">
              {" "}
              {remainingChars} characters remaining
            </label>
          </div>

          <div className="divider-noborder "> </div>

          <div className="Askquestion Border-gray Padding">
            <h3>What are the details of your problem?</h3>
            <label>
              Introduce the problem and expand on what you put in the title.
              Minimum
            </label>

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
          <button onClick={submitHandler}>Submit</button>{" "}
          <label className="red">{message}</label>
        </div>
      </form>
    </div>
  );
};

export default AskQuestion;

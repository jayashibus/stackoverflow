import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <div className="Askquestion-container">
        <div>
          <h1>Ask a public Question</h1>
        </div>
        <div className="Askquestion">
          <h1>Title</h1>
          Be specific and imagine you’re asking a question to another person.
          <input type="text"></input>
        </div>

        <div className="Askquestion">
          <h1>What are the details of your problem?</h1>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
          <textarea id="question" name="question" rows="5" cols="33">
            It was a dark and stormy night...
          </textarea>
        </div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AskQuestion;

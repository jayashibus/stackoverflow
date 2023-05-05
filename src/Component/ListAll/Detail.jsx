import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ data }) => {
  console.log(data);

  const { qid } = useParams();
  console.log(qid);
  const filteredData = data.filter((item) => item.id === qid);

  return (
    <div>
      <div className="List-container">
        <div className="Title-left">
          How to make sibling div element visible when list item is hovered on
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">Asked Today</div>
        <div className="Title-right "> Viewed 5 times</div>
      </div>
      <div className="divider"> </div>
      <div className="List-container">
        <div className="List-vertical-left">
          <div className="Votes">0 Votes</div>
          <div className="Votes">0 Answer</div>
          <div className="Votes">3 Views</div>
        </div>
        <div className="List-vertical-right">
          <div>
            Woocommerce add custom dropdown-field to checkout and show in
            backend (order)
          </div>
          <div>
            I use the following code to add a custom field to the WooCommerce
            checkout. The field is showing in the checkout process but in the
            backend the value is always empty. add_filter...
          </div>
          <div className="Button-left ">
            <button> javaScript </button>
            <button> python </button>
            <button> backend </button>
          </div>
        </div>
      </div>
      <div className="divider"> </div>
      <div className="List-container">
        <div className="Title-left">2 Answers </div>
      </div>
      <div className="List-container">
        <div className="List-vertical-left">
          <div className="Votes">0 Votes</div>
          <div className="Votes">0 Answer</div>
          <div className="Votes">3 Views</div>
        </div>
        <div className="List-vertical-right">
          <div>
            Woocommerce add custom dropdown-field to checkout and show in
            backend (order)
          </div>
          <div>
            I use the following code to add a custom field to the WooCommerce
            checkout. The field is showing in the checkout process but in the
            backend the value is always empty. add_filter...
          </div>
          <div className="Button-left ">
            <button> javaScript </button>
            <button> python </button>
            <button> backend </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

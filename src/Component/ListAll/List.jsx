import React from "react";

const List = () => {
  return (
    <>
      <div className="List-container">
        <div className="Title-left">All Questions</div>
        <div className="Button-right ">
          <button> Ask Question </button>
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">23691,456 Question</div>
        <div className="Button-right ">
          <button> Newest </button>
          <button> Active </button>
          <button> Bountied </button>
          <button> Unanswered </button>
          <button> More </button>
        </div>
      </div>
      <div class="divider"> </div>
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
      <div class="divider"> </div>
      <div className="List-container">
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>

        <div class="Button-right ">
          <a href="#">15</a>
          <a href="#">30</a>
          <a href="#">50</a> per page
        </div>
      </div>
    </>
  );
};

export default List;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllList from "./AllList";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const List = () => {
  //Pagination state values
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  //Extract Data from Redux
  let data = useSelector((state) => {
    return { ...state.allData };
  });

  //Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Pagination variables
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.datas.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="List-container">
        <div className="Title-left">
          <h1>All Questions</h1>
        </div>
        <div className="Button-right ">
          <Link to={{ pathname: "/askquestion" }}>
            <button> Ask Question </button>
          </Link>
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">
          <h3>{data.datas.length} Question</h3>
        </div>
        <div className="Button-right ">
          <button> Newest </button>
          <button> Active </button>
          <button> Bountied </button>
          <button> Unanswered </button>
          <button> More </button>
        </div>
      </div>
      <div className="divider"> </div>
      {currentItems.map((item) => (
        <AllList key={item.id} {...item} />
      ))}

      <div className="List-container">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.datas.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <div className="Button-right ">
          <div className="pagination"></div>
        </div>
      </div>
    </>
  );
};

export default List;

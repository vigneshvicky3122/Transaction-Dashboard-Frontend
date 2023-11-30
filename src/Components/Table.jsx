import React, { useEffect, useState } from "react";

function Table({ Data, isSearch }) {
  const FilterData =
    Data &&
    Data.filter((fill) => {
      if (
        fill.title.toString().toLowerCase().includes(isSearch.toLowerCase()) ||
        fill.description
          .toString()
          .toLowerCase()
          .includes(isSearch.toLowerCase()) ||
        fill.price.toString().toLowerCase().includes(isSearch.toLowerCase())
      ) {
        return fill;
      }
    });
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const currentData = FilterData.slice(firstItem, lastItem);
  const totalItems = FilterData.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    if (isSearch !== "All") {
      setCurrentPage(1);
    } else {
      setCurrentPage(1);
    }
  }, [isSearch]);

  return (
    <>
      <div className="container my-5">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Tittle</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Sold</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((items, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{items.id}</th>
                    <td>{items.title}</td>
                    <td>{items.description}</td>
                    <td>{items.price}</td>
                    <td>{items.category}</td>
                    <td>{items.sold.toString()}</td>
                    <td>
                      <img src={items.image} alt="..." width="50" height="50" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h6>Page No : {currentPage}</h6>
          </div>
          <div>
            <div className="d-flex gap-3">
              <h6>
                <a
                  href="#"
                  className={`${
                    currentPage === pageNumbers.length
                      ? "nav-link disabled"
                      : "nav-link"
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </a>
              </h6>
              <h6>-</h6>
              <h6>
                <a
                  href="#"
                  className={`${
                    currentPage === 1 ? "nav-link disabled" : "nav-link"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </a>
              </h6>
            </div>
          </div>

          <div>
            <h6>Per Page : {10}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;

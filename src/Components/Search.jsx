import React from "react";

function Search({ setSearch, setMonth }) {
  return (
    <>
      <div className="container">
        <h1 className="w-25 my-5 py-5 px-0 mx-auto rounded-circle bg-white text-center fs-2">
          Transaction Dashboard
        </h1>
        <div className="d-flex justify-content-between my-5 w-100">
          <input
            type="search"
            className="form-control bg-warning w-25 p-2 text-center fw-semibold rounded-5"
            id="searchInput"
            placeholder="Search transaction"
            onChange={(event) => setSearch(event.target.value)}
          />
          <select
            className="form-select bg-warning w-25 p-2 text-center fw-semibold rounded-3"
            aria-label="select month"
            defaultValue="All"
            onChange={(event) => setMonth(event.target.value)}
          >
            <option value="All">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Search;

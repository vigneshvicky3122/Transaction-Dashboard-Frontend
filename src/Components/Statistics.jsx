import React from "react";

function Statistics({ Data, isSearch, isMonth }) {
  let total = [];
  let sold = [];
  let unsold = [];
  Data &&
    Data.map((element) => {
      if (element.price) {
      }
      if (element.sold === true) {
        total.push(element.price);
        sold.push(element);
      }
      if (element.sold === false) {
        unsold.push(element);
      }
    });

  return (
    <>
      <div className="container my-5">
        <h2>
          Statistics - {isMonth}&nbsp;
          <sup className="fw-normal fs-6">
            (Select month name form dropdown)
          </sup>
        </h2>
        <div className="d-flex flex-row w-25 bg-warning rounded-4 gap-5 p-3 mt-5 mb-5">
          <div className="d-flex flex-column justify-content-start gap-1">
            <p>Total sale</p>
            <p>Total sold item</p>
            <p>Total not sold item</p>
          </div>
          <div className="d-flex flex-column justify-content-start gap-1">
            <p>{total.reduce((acc, cur) => acc + cur, 0).toFixed(2)}</p>
            <p>{sold.length}</p>
            <p>{unsold.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;

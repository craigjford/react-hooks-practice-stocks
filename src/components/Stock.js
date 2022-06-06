import React from "react";

function Stock({ srce, type, name, ticker, price, onStockClick }) {
  console.log('in Stock name = ', onStockClick);

  function handddClick(event) {

      console.log('handddClick = looooooo')
      if (srce === "stocks") {
        console.log('srce = ', srce)
      } else {
        console.log('srce = ', srce)
      }

      onStockClick(srce, type, name, ticker, price);

  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handddClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + " " + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

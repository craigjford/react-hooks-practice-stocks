import React from "react";

function Stock({ name, ticker, price }) {
  console.log('in Stock name = ', name);

  function handddClick(event) {
      console.log('Stock handle Click name = ', event);
      //console.log('Stock handle Click price = ', event.price);
      //console.log('HO HO HO = ', event)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handddClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + "   " + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

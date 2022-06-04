import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockClick }) {
  console.log('in StockContainer = ', stocks)

  const stockList = stocks.map((stock) => {
            return (<Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} onClick={handleClick} />)   
  })

  function handleClick(event) {
    console.log('onhandleClick evt = ', event.target.id)
 }

  //console.log('in StockContainer after mapping - stockList = ', stockList)
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;

/*----------------------------------------------------------------
 onClick={handddClick}
 */
import React from "react";
import Stock from "./Stock";  

function StockContainer({ srce, stocks, handleStockContClick }) {

  const handleStockClick = (srce, type, name, ticker, price) => {
      handleStockContClick(srce, type, name, ticker, price);
  }
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} srce={"stocks"} type={stock.type} name={stock.name} ticker={stock.ticker} price={stock.price} onStockClick={handleStockClick} />
))

  return (
    <div>
      {console.log('****   in StockContainer = ', stocks)}
      <h2>Stocks</h2>
        {stockList}
    </div>
  );
}

export default StockContainer;


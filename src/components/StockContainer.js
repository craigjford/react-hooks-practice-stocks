import React from "react";
import Stock from "./Stock";  

function StockContainer({ srce, stocks, handleStockContClick }) {

  console.log('****   in StockContainer = ', stocks);

  function handleStockClick(srce, type, name, ticker, price) {
      console.log('Stock Container handleStockClick srce = ', srce, name);
      handleStockContClick(srce, type, name, ticker, price);
  }

  return (
    <div>
      <h2>Stocks</h2>
        {stocks.map((stock) => (
            <Stock key={stock.id} srce={"stocks"} type={stock.type} name={stock.name} ticker={stock.ticker} price={stock.price} onStockClick={handleStockClick} />
        ))}
    </div>
  );
}

export default StockContainer;


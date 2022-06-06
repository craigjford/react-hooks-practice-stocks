import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ srce, profileStocks, handleProfContClick }) {

  function handleProfClick(srce, type, name, ticker, price) {
      console.log('Portfolio Container handleStockClick type = ', srce, name);
      handleProfContClick(srce, type, name, ticker, price);
  }

  const portfolioList = profileStocks.map((stock) => {
            return (<Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} onStockClick={handleProfClick} />);   
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;

import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ srce, profileStocks, handleProfContClick }) {

  console.log('****   in PortContainer = ', profileStocks);

  function handleProfClick(srce, type, name, ticker, price) {
      console.log('Portfolio Container handleStockClick type = ', srce, name);
      handleProfContClick(srce, type, name, ticker, price);
  }

  //const portfolioList = profileStocks.map((stock) => {
  //          return (<Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} />);   
  //})


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {profileStocks.map((stock) => (
            <Stock key={stock.id} srce={"profile"} type={stock.type} name={stock.name} ticker={stock.ticker} price={stock.price} onStockClick={handleProfClick} />
      ))}

    </div>
  );
}

export default PortfolioContainer;

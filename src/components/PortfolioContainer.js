import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ profileStocks }) {
  console.log('in Portfolio Container = ', profileStocks)

  const portfolioList = profileStocks.map((stock) => {
            return (<Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} />);   
  })

  console.log('in Portfolio Container after mapping - stockList = ', portfolioList)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;

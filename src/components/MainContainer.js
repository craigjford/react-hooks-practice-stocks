import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([]);
  const [profileStocks, setProfileStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stocks) => {
                setStocks(stocks);
                setDisplayStocks(stocks);
      });
  }, [])

  function handleStockClick(event) {
    console.log('in Main Stock Clike id = ', event);
  }

  function filterChange(type) {
    console.log('*****  in Main Stock Clike type = ', type);
    const filteredStocks = stocks.filter((stock) => {
          if (stock.type === type) {
              return true
          } else {
              return false
          }
    })
    setDisplayStocks(filteredStocks)
  }
  const sortChange = ((sortType) => {
    console.log('in MainContainer Sort = ', sortType)
  })  

  return (
    <div>
      <SearchBar filterChange={filterChange} sortChange={sortChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayStocks} onClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer profileStocks={profileStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

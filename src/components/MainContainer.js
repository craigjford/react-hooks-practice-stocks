import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([]);
  const [profileStocks, setProfileStocks] = useState([]);
  const [displaySortType, setDisplaySortType] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((stocks) => {
                setStocks(stocks);
                setDisplayStocks(stocks);
       //         setProfileStocks(stocks);
      });
  }, [])

  function handleStockContainerClick(srce, type, name, ticker, price) {

    const newProfStock = {
        ticker: ticker,
        name: name,
        type: type,
        price: price
    }

    setProfileStocks([...profileStocks, newProfStock]);

  }

  function handleProfContainerClick(srce, type, name, ticker, price) {

    const profileDeleteStocks = profileStocks.filter((stock) => stock.name !== name);
    setProfileStocks(profileDeleteStocks)

  }

  function filterChange(type) {

    const filteredStocks = stocks.filter((stock) => {
          if (stock.type === type) {
              return true
          } else {
              return false
          }
    })
    setDisplayStocks(filteredStocks)
  }

  function sortChange(sortType) {

    if (sortType === "Price") {
        sortDisplayPrice();
    } else {
        sortAlpha();
    }
    setDisplaySortType(sortType);
  }
  const sortDisplayPrice = () => {

    const sortedStocks = displayStocks.sort(function(a, b) {
      return a.price - b.price;
    })

    setDisplayStocks(sortedStocks);

  }

  const sortAlpha = () => {

    const sortedStocks = displayStocks.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    })

    setDisplayStocks(sortedStocks)
  }


  return (
    <div>
      <SearchBar filterChange={filterChange} sortChange={sortChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer srce="stocks" stocks={displayStocks} handleStockContClick={handleStockContainerClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer srce="profile" profileStocks={profileStocks} handleProfContClick={handleProfContainerClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

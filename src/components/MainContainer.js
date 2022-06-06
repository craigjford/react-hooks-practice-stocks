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
                setProfileStocks(stocks);
      });
  }, [])

  function handleStockContainerClick(srce, type, name, ticker, price) {
    console.log('in Main Stock Contain Clike srce = ', srce);
    console.log('in Main Stock Contain Clike type = ', type);
    console.log('in Main Stock Contain Clike name = ', name);
    console.log('in Main Stock Contain Clike ticker = ', ticker);
    console.log('in Main Stock Contain Clike price = ', price);

    //console.log('Step 1 baja')
    //const newFilteredProfileStocks = profileStocks.filter((stock) => stock.name !== name);
    //console.log('Step 2 baja')
    //const newProfStock = stocks.filter((stock) => stock.name === name);
    //console.log('Step 3 baja')

    //setProfileStocks(...newFilteredProfileStocks, newProfStock);
    //console.log('complete');

  }

  function handleProfContainerClick(srce, type, name, ticker, price) {
      console.log('in Prof Stock Contain Clike srce = ', srce);
      console.log('in Prof Stock Contain Clike type = ', type);
      console.log('in Prof Stock Contain Clike name = ', name);
      console.log('in Prof Stock Contain Clike ticker = ', ticker);
      console.log('in Prof Stock Contain Clike price = ', price);

    const profileDeleteStocks = profileStocks.filter((stock) => stock.name !== name);
    setProfileStocks(profileDeleteStocks)

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

  function sortChange(sortType) {
    console.log('in MainContainer Sort = ', sortType)
    if (sortType === "Price") {
        sortDisplayPrice();
    } else {
        sortAlpha();
    }
  }

  function sortDisplayPrice() {
    console.log('in sort price')
    const sortedStocks = displayStocks.sort(function(a, b) {
      return a.price - b.price;
    })
    console.log('In Price sorted stocks = ', sortedStocks)
    //setDisplayStocks(sortedStocks)
  }

  function sortAlpha() {
    console.log('in sort alpha')
    const sortedStocks = displayStocks.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    })
    console.log('In ALPHA sorted stocks = ', sortedStocks)
    setDisplayStocks([]);
    console.log('emtipied and reloaded')
    setDisplayStocks(sortedStocks)
  }
  //console.log('End Of Main Container, stocks = ', displayStocks)

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

import React, { useState, useEffect } from "react";
import StockService from "./services/stockService";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import PortfolioSummary from "./components/PortfolioSummary";
import PortfolioDistribution from "./components/PortfolioDistribution";
import "./App.css";

function App() {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [distribution, setDistribution] = useState({});

  useEffect(() => {
    loadStocks();
    loadPortfolioDistribution();
  }, []);

  const loadStocks = async () => {
    try {
      const stocks = await StockService.getAllStocks();
      setStocks(stocks);
    } catch (error) {
      console.error("Error loading stocks:", error);
    }
  };

  const loadPortfolioDistribution = async () => {
    try {
      const distribution = await StockService.getPortfolioDistribution();
      setDistribution(distribution);
    } catch (error) {
      console.error("Error loading portfolio distribution:", error);
    }
  };

  const handleSubmit = async (stock) => {
    try {
      if (selectedStock) {
        const updatedStock = await StockService.updateStock(
          selectedStock.ticker,
          stock
        );
        setStocks(
          stocks.map((s) =>
            s.ticker === selectedStock.ticker ? updatedStock : s
          )
        );
      } else {
        const newStock = await StockService.addStock(stock);
        setStocks([...stocks, newStock]);
      }
      setSelectedStock(null);
    } catch (error) {
      console.error("Error submitting stock:", error);
    }
  };

  const handleEdit = (stock) => setSelectedStock(stock);

  const handleDelete = async (ticker) => {
    try {
      await StockService.deleteStock(ticker);
      setStocks(stocks.filter((stock) => stock.ticker !== ticker));
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <StockForm onSubmit={handleSubmit} selectedStock={selectedStock} />

      <div className="portfolio-section">
        <h3>Your Stocks</h3>
        <StockList
          stocks={stocks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      <div className="summary-section">
        <PortfolioSummary stocks={stocks} />
        <PortfolioDistribution distribution={distribution} />
      </div>
    </div>
  );
}

export default App;

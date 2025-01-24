import React from "react";
import "../PortfolioSummary.css";

const PortfolioSummary = ({ stocks }) => {
  const totalValue = stocks.reduce((total, stock) => {
    return total + (stock.currentPrice || stock.buyPrice) * stock.quantity;
  }, 0);

  return (
    <div className="portfolio-summary">
      <h3>Total Portfolio Value</h3>
      <p>${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default PortfolioSummary;

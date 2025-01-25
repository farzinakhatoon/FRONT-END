import React, { useMemo } from "react";

function PortfolioSummary({ stocks }) {
  const totalValue = useMemo(() => {
    return stocks.reduce((total, stock) => {
      // Ensure each stock value is a valid number
      const stockValue = parseFloat(stock.value);
      return total + (isNaN(stockValue) ? 0 : stockValue); // Ignore invalid values
    }, 0);
  }, [stocks]);
  // Recalculate total value when stocks change

  return (
    <div className="portfolio-summary">
      <h3>Total Portfolio Value: ${totalValue.toFixed(2)}</h3>
    </div>
  );
}

export default PortfolioSummary;

import React from "react";

function PortfolioDistribution({ distribution }) {
  if (!distribution) {
    return <div>Loading...</div>; // or return null to show nothing until data is available
  }

  return (
    <div className="portfolio-distribution">
      <h3>Portfolio Distribution</h3>
      <ul>
        {Object.entries(distribution).map(([ticker, percentage]) => {
          const validPercentage = isNaN(percentage) ? 0 : Number(percentage); // Ensure percentage is a valid number
          return (
            <li key={ticker}>
              {ticker}: {validPercentage.toFixed(2)}%
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PortfolioDistribution;

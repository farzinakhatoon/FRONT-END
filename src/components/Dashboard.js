import React from "react";

function Dashboard({ totalValue, performanceMetrics }) {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <p>Total Portfolio Value: ${totalValue}</p>
      <p>Total Returns: ${performanceMetrics.totalReturns}</p>
      <p>Total Investment: ${performanceMetrics.totalInvestment}</p>
    </div>
  );
}

export default Dashboard;

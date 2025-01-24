import React from "react";
import "../StockList.css";

const StockList = ({ stocks, handleEdit, handleDelete }) => {
  return (
    <ul className="stock-list">
      {stocks.map((stock) => (
        <li key={stock.ticker} className="stock-item">
          <div>
            <span className="stock-name">
              {stock.name} ({stock.ticker})
            </span>
            <span className="stock-quantity">Qty: {stock.quantity}</span>
            <span className="stock-price">Buy Price: ${stock.buyPrice}</span>
          </div>
          <div className="stock-actions">
            <button onClick={() => handleEdit(stock)}>Edit</button>
            <button onClick={() => handleDelete(stock.ticker)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StockList;

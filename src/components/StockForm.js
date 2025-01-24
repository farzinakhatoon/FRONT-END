import React, { useState, useEffect } from "react";
import "../StockForm.css";

const StockForm = ({ onSubmit, selectedStock }) => {
  const [ticker, setTicker] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [buyPrice, setBuyPrice] = useState(0);

  useEffect(() => {
    if (selectedStock) {
      setTicker(selectedStock.ticker);
      setName(selectedStock.name);
      setQuantity(selectedStock.quantity);
      setBuyPrice(selectedStock.buyPrice);
    }
  }, [selectedStock]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stock = { ticker, name, quantity, buyPrice };
    onSubmit(stock);
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <h3>{selectedStock ? "Edit Stock" : "Add New Stock"}</h3>
      <input
        type="text"
        placeholder="Stock Ticker"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Stock Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
        required
      />
      <button type="submit">
        {selectedStock ? "Update Stock" : "Add Stock"}
      </button>
    </form>
  );
};

export default StockForm;

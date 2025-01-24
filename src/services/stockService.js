import axios from "axios";

const API_BASE_URL = "https://portfolio-tracker-zpkg.onrender.com/api/stocks";

class StockService {
  static async getAllStocks() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching stocks:", error);
      throw error;
    }
  }

  static async getPortfolioDistribution() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/portfolio-distribution`
      ); // Correct string interpolation
      return response.data;
    } catch (error) {
      console.error("Error fetching portfolio distribution:", error);
    }
  }

  static async addStock(stock) {
    try {
      const response = await axios.post(API_BASE_URL, stock);
      return response.data;
    } catch (error) {
      console.error("Error adding stock:", error);
      throw error;
    }
  }

  static async updateStock(ticker, stock) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${ticker}`, stock); // Correct string interpolation
      return response.data;
    } catch (error) {
      console.error("Error updating stock:", error);
      throw error;
    }
  }

  static async deleteStock(ticker) {
    try {
      await axios.delete(`${API_BASE_URL}/${ticker}`); // Correct string interpolation
    } catch (error) {
      console.error("Error deleting stock:", error);
      throw error;
    }
  }
}

export default StockService;

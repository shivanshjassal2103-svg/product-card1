import React from "react";
import ReactDOM from "react-dom/client";

// ProductCard Component
const ProductCard = ({ name, price, status }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div style={styles.container}>
      <h2>Products List</h2>
      <div style={styles.list}>
        <ProductCard name="Wireless Mouse" price={25.99} status="In Stock" />
        <ProductCard name="Keyboard" price={45.5} status="Out of Stock" />
        <ProductCard name="Monitor" price={199.99} status="In Stock" />
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px"
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "180px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

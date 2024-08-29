import React from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management System</h1>
      </header>
      <main className="App-main">
        <div className="form-container">
          <h2>Add New Product</h2>
          <ProductForm />
        </div>
        <div className="table-container">
          <h2>Product List</h2>
          <ProductTable />
        </div>
      </main>
    </div>
  );
}

export default App;

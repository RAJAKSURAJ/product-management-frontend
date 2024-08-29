import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>CAT No.</th>
          <th>CAS No.</th>
          <th>Molecular Formula</th>
          <th>Molecular Weight</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.catNo}</td>
            <td>{product.casNo}</td>
            <td>{product.molF}</td>
            <td>{product.molWt}</td>
            <td>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;

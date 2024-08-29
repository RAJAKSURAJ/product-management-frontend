import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    catNo: "",
    casNo: "",
    molF: "",
    molWt: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", product)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Product added successfully");
          setProduct({ name: "", catNo: "", casNo: "", molF: "", molWt: "" });
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="catNo"
          value={product.catNo}
          onChange={handleChange}
          placeholder="CAT No."
        />
        <input
          type="text"
          name="casNo"
          value={product.casNo}
          onChange={handleChange}
          placeholder="CAS No."
        />
        <input
          type="text"
          name="molF"
          value={product.molF}
          onChange={handleChange}
          placeholder="Molecular Formula"
        />
        <input
          type="text"
          name="molWt"
          value={product.molWt}
          onChange={handleChange}
          placeholder="Molecular Weight"
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default ProductForm;

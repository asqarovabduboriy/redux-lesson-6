import React from "react";
import { useState } from "react";
import { useCreateProductMutation } from "../../../context/product";
import { toast } from "react-toastify";
const Product = {
  name: " ",
  lastname: " ",
  adrres: " ",
};
const Createproduct = () => {
  const [product, setProduct] = useState(Product);
  let [createProduct] = useCreateProductMutation();
  const handlecreate = (e) => {
    e.preventDefault();
    if (product.name.trim() === "" && product.lastname.trim() === "" && product.adrres.trim() === "") {
      toast.error("Please enter a name");
    } else {
      createProduct({ name: product.name, lastname: product.lastname, adrres: product.adrres });
      setProduct({ name: "", lastname: "", adrres: "" });
      toast.success("Product created successfully");
    }
  };
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "20px" }}>Createproduct</h2>
      <form onSubmit={handlecreate} className="form__create">
        <label>enter name</label>
        <input
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <label>enter lastname</label>
        <input
          value={product.lastname}
          onChange={(e) => setProduct({ ...product, lastname: e.target.value })}
          type="text"
          placeholder="last name"
        />
        <label>enter adrres</label>
        <input
          value={product.adrres}
          onChange={(e) => setProduct({ ...product, adrres: e.target.value })}
          type="text"
          placeholder="age"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Createproduct;

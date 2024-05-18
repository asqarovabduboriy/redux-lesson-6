import React from "react";
import { useState } from "react";
import { useCreateProductMutation } from "../../../context/product";
import { toast } from "react-toastify";
const product = {
  name: " ",
};
const Createproduct = () => {
  const [name, setProduct] = useState(product);
  let [createProduct] = useCreateProductMutation();
  const handlecreate = (e) => {
    e.preventDefault();
    if (name.name.trim() === '') {
      toast.error("Please enter a name");
    } else {
      createProduct({ name: name.name });
      setProduct({ name: '' });
      toast.success("Product created successfully");
    }
  };
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "20px" }}>Createproduct</h2>
      <form onSubmit={handlecreate} className="form__create">
        <label>enter name</label>
        <input
          value={name.name}
          onChange={(e) => setProduct({ ...name, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Createproduct;

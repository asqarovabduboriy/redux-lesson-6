import React, { useState } from "react";
import { useDeleteProductMutation } from "../../context/product";
import { toast } from "react-toastify";
import EditModal from '../edit-modal/EditModal'
import EditProduct from "../EditProduct/EditProduct";

const Product = ({ data, isadmin }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const [showpeoduct, setShowpeoduct ] = useState(null);

  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success(`Product Deleted with id ${id}`);
  };

  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.avatar} alt="" />
      <div className="card_info">
        <h3>{el.name}</h3>
        <h3>{el.lastname}</h3>
      </div>
      <p>{el.adrres}</p>

      {isadmin ? (
        <>
          <button className="btn__delete" onClick={() => handleDelete(el.id)}>
            Delete
          </button>
          <button  className="btn__edit" onClick={() => setShowpeoduct(el)}>Edit</button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "20px" }}>Product</h1>
        <div className="card_flex_wrapper">{card}</div>
      </div>

      {showpeoduct ?  <EditProduct showp={showpeoduct} setShowp={setShowpeoduct } /> : <></>}
    </>
  );
};

export default Product;

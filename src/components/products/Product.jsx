import React from "react";
import { useDeleteProductMutation } from "../../context/product";
import { toast } from "react-toastify";

const Product = ({ data,isadmin }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success(`Product Deleted with id ${id}`);
  }

  let card = data?.map((el)=>(
    <div className="card" key={el.id}>
            <img src={el.avatar} alt="" />
            <h3>{el.name}</h3>
           {
             isadmin ? <button  className="btn__delete" onClick={()=>handleDelete(el.id)}>Delete</button>: <></>
           }
          </div>
  ))
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" ,margin:"20px"}}>Product</h1>
        <div className="card_flex_wrapper">
          {card}
        </div>
      </div>
    </>
  );
};

export default Product;

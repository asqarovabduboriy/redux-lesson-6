import React from 'react'
import { useEditProductMutation } from '../../context/product';
import { toast } from 'react-toastify';

const EditProduct = ({ showp, setShowp}) => {
let [editProduct] = useEditProductMutation();
    const handleEdit = (e) => {
        e.preventDefault();
        let user = {
          name: showp.name,  
          lastname: showp.lastname,
          adrres: showp.address,
        };
        editProduct({ id: showp.id, body: user });
        setShowp(null);
        toast.success("Product updated successfully");
    }
  return (
   <>
   <div className="big_modal " onClick={() => setShowp(null)}></div>
      <div className="modal_wrapper">
        <form onSubmit={handleEdit} className="modal">
          <h2 style={{ textAlign: "center" }}>Up date product</h2>
          <input
            value={showp.name}
            onChange={(e) => setShowp({ ...showp, name: e.target.value })}
            type="text"
            placeholder="name"
          />
          <input
            value={showp.lastname}
            onChange={(e) => setShowp({ ...showp, lastname: e.target.value })}
            type="text"
            placeholder="lastname"
          />
          <input
            value={showp.adrres}
            onChange={(e) => setShowp({ ...showp, adrres: e.target.value })}
            type="text"
            placeholder="address"
          />
          <button className="btn_save" >
            save
          </button>
          <button
            type="button"
            className="btn_cancel"
            onClick={() => setShowp(null)}
          >
            Cancel
          </button>
        </form>
      </div>
   </>
  )
}

export default EditProduct
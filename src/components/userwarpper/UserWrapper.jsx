import React from "react";
import { useDeleteUserMutation } from "../../context/user";
import { toast } from "react-toastify";

const UserWrapper = ({ data, isadmin }) => {
    const [deleteUser] = useDeleteUserMutation();
  const handleDelete = (id) => {
    deleteUser(id);
    toast.success(`User Deleted with id ${id}`);
  };
  let usres = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="card_img">
        <img
          src={el.avatar}
          alt=""
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <h3>{el.name}</h3>
      <h3>{el.lastname}</h3>
      <h3>{el.age}</h3>

      {isadmin ? <button onClick={() => handleDelete(el.id)} className="btn__delete">Delete</button> : <></>}
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="card_flex_wrapper">{usres}</div>
      </div>
    </>
  );
};

export default UserWrapper;

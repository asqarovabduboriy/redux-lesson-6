import React from "react";
import "./Edit.css";
import { useEditUserMutation } from "../../context/user";
import { toast } from "react-toastify";

const EditModal = ({ show, setShow }) => {
  let [editUser] = useEditUserMutation();
  const handleEdit = (e) => {
    e.preventDefault();

    let user = {
      name: show.name,
      lastname: show.lastname,
      age: show.age,
    };
    editUser({ id: show.id, body: user });
    toast.success("User updated successfully");
    setShow(null);
  };
  return (
    <>
      <div className="big_modal " onClick={() => setShow(null)}></div>
      <div className="modal_wrapper">
        <form onSubmit={handleEdit} className="modal">
          <h2 style={{ textAlign: "center" }}>Up date user</h2>
          <input
            value={show.name}
            onChange={(e) => setShow({ ...show, name: e.target.value })}
            type="text"
            placeholder="name"
          />
          <input
            value={show.lastname}
            onChange={(e) => setShow({ ...show, lastname: e.target.value })}
            type="text"
            placeholder="lastname"
          />
          <input
            value={show.age}
            onChange={(e) => setShow({ ...show, age: e.target.value })}
            type="number"
            placeholder="age"
          />
          <button className="btn_save" onClick={handleEdit}>
            save
          </button>
          <button
            type="button"
            className="btn_cancel"
            onClick={() => setShow(null)}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditModal;

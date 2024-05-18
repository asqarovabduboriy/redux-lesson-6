import React, { useState } from "react";
import { useCreateUserMutation } from "../../../context/user";
import { toast } from "react-toastify";
const users = {
  name: " ",
  lastname: " ",
  age: " ",
}
const CretaeUser = () => {
  const [user, setUser] = useState(users);

  let [createUser] = useCreateUserMutation();

  const handlecreate = (e) => { 
    e.preventDefault(); 
    if (user.name.trim() === '' || user.lastname.trim() === '' || user.age.trim() === '') {
      toast.error("Please enter a name");
    } else {
      createUser({ name: user.name, lastname: user.lastname, age: user.age });
      setUser({ name: '', lastname: '', age: '' });
      toast.success("User created successfully");
    }
  };
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "20px" }}>CreateUser</h1>

        <form onSubmit={handlecreate} className="form__create">
          <label>enter name</label>
          <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder="name" />
          <label >enter lastname</label>
          <input value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="text" placeholder="lastname" />
          <label>enter age</label>
          <input value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} type="number" placeholder="age" />
          <button>Create</button>
        </form>
      </div>
    </>
  );
};

export default CretaeUser;

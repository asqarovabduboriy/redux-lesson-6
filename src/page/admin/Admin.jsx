import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
    <div className="admin">
    <div className="sidebar">
        <div className="container">
          <div className="sidebar__menu">
            <Link to="mangeproduct">
              <h5>Manage Product</h5>
            </Link>
            <Link to="createproducts">
              <h5>Create Product</h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">

      <Outlet />
      </div>
    </div>
    </>
  );
};

export default Admin;

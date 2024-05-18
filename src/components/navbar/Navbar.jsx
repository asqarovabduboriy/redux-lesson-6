import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container wrapper_head">
         <NavLink to={"/"}> <h1>Lesson 6</h1></NavLink>
          <nav>
            <ul>
              <NavLink to={"/"}>
                {" "}
                <li>Home</li>
              </NavLink>
              <NavLink to={"/users"}>
                {" "}
                <li>Usres</li>
              </NavLink>
            </ul>
          </nav>
          <div className="admin_head">
            <NavLink to={"/admin"} >
              <button>A</button>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

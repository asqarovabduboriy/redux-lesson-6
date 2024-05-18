import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Users from "./page/users/Users";
import Admin from "./page/admin/Admin";
import CreateUser from "./page/admin/createuser/CretaeUser";
import Mangeuser from "./page/admin/mangeuser/Mange";
import CreateProduct from "./page/admin/createproduct/Createproduct";
import Mangeproduct from "./page/admin/mangeproduct/MangeProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />

        <Route path="admin" element={<Admin />}>
          <Route path="createusers" element={<CreateUser />} />
          <Route path="mangeuser" element={<Mangeuser />} />
          <Route path="createproducts" element={<CreateProduct />} />
          <Route path="mangeproduct" element={<Mangeproduct />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

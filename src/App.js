import React from "react";
import { Route, Routes } from "react-router-dom";
import Contuct from "./components/Contuct/Contuct";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import Sope from "./components/Shope/Sope";
import Login from "./components/login/Login"
import SignUp from "./components/signup/Signup";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Sope></Sope>}></Route>
        <Route path="/inventory" element={
          <RequireAuth><Inventory/></RequireAuth>
        }></Route>
        <Route path="/contuct" element={<Contuct/>}></Route>
        <Route path="/home" element={<Sope></Sope>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;

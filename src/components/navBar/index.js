import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  useNavigate,
} from "react-router-dom";
import "./index.scss";
export default function NavBar() {
  const navigate = useNavigate();
  function onLogout() {
    localStorage.setItem("token", false);
    navigate("/login");
  }
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ion-icon name="people-outline"></ion-icon> <p>Customer Manager</p>
        <NavLink className="navbar__links" to="/customers" end>
          Customers
        </NavLink>
        <NavLink className="navbar__links" to="/login" end>
          Login
        </NavLink>
        {localStorage.getItem("token") === "true" ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}

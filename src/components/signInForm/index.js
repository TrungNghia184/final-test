import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Navigate,
    useNavigate,
  } from "react-router-dom";
import { toastController } from "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js";
import "./index.scss"
window.toastController = toastController;
export default function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  function handleUserNameChange(e) {
    setUsername(e.target.value);
    console.log(username);
  }
  function checkAuthentication(e) {
    e.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("listUsers"));
    console.log(usersList);
    let matchedUser = usersList.filter((user) => {
      if (user.username === username && user.password === password) {
        return user;
      }
    });
    if (matchedUser.length > 0) {
      localStorage.setItem("token", true);
      console.log(localStorage.getItem("token"));
        navigate('/')
    } else {
      showAlert();
    }
    console.log(matchedUser);
  }
  async function showAlert() {
    const toast = await toastController.create({
      color: "danger",
      duration: 2000,
      message: "Wrong username or password",
      showCloseButton: true,
      position: "top",
    });

    await toast.present();
  }
  return (
    <form onSubmit={checkAuthentication}>
      <h1>Sign-in</h1>
      <label className="label" for="username">
        Username
      </label>
      <input
        className="input"
        type="text"
        id="username"
        onChange={handleUserNameChange}
        required
      />
      <label className="label" for="password">
        Password
      </label>
      <input
        className="input"
        type="password"
        id="password"
        onChange={handlePasswordChange}
        required
      />
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
}

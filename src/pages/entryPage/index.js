import React, { useEffect, useState } from "react";
import SignIn from "../../components/signInForm";
import SignUp from "../../components/signUpForm";
import "./index.scss"
export default function EntryPage() {
  const [ signInOrSignUp, setSignInOrSignUp ] = useState('signIn')
  function setSignIn() {
    setSignInOrSignUp('signIn')
  }
  function setSignUp() {
    setSignInOrSignUp('signUp')
  }
  return (
    <div className="login-container">
      <div className="welcome-container">
        <div className="welcome-message">
          <p className="welcome-title">Welcome to&nbsp;</p>
          <p className="page-name">CovidGlobal</p>
          <p className="page-missions">Our missions is to inform you the latest news about Covid-19
          around the world and best analytical data about the destruction of the virus.</p>
        </div>
        <div className="navigation-buttons">
          <button onClick={setSignIn}>Sign In</button>
          <button onClick={setSignUp}>Sign Up</button>
        </div>
      </div>
      {(signInOrSignUp === 'signIn') ? <SignIn /> : <SignUp currentPage={setSignInOrSignUp} />}
    </div>
  );
}

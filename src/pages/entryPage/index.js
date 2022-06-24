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
        <div className="navigation-buttons">
          <button onClick={setSignIn}>Sign In</button>
          <button onClick={setSignUp}>Sign Up</button>
        </div>
      </div>
      {(signInOrSignUp === 'signIn') ? <SignIn /> : <SignUp currentPage={setSignInOrSignUp} />}
    </div>
  );
}

import React from "react";
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
import "./Auth.scss";

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;

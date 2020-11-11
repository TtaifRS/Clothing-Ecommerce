import React, { Component } from "react";
import { signInWithGoogle } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import "./SignIn.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="title">
          <h2>I already have an account</h2>
          <span>Sign in with your Email and Password</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="password"
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with
              <IconContext.Provider
                value={{
                  style: {
                    verticalAlign: "middle",
                    padding: "0 3px",
                  },
                  size: "28px",
                }}
              >
                <FcGoogle />
              </IconContext.Provider>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

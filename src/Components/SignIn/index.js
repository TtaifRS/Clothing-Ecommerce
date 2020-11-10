import React, { Component } from "react";
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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

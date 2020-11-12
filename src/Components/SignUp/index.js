import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../utils/firebase";
import "./SignUp.scss";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password.length < 6) {
      toast.error("Password is too short");
    } else if (password !== confirmPassword) {
      toast.error("Password don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="title">
          <h2>I do not have an account</h2>
          <span>Create an account with email</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
            />
            <ToastContainer />
            <CustomButton type="submit">Join Us</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

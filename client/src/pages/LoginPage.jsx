import React, { Component, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

function Login(props) {
  // we need to set some state

  const { form, handleSubmit, handleChange } = useAuth("login", props);
  console.log("FORM VALUES CHANGING", form);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={form.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

class LogIn2 extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING FORM TO OUR BACKEND", this.state);
    // pretty please do a post request 🙏
    axios
      .post("http://localhost:5005/auth/login", this.state)
      .then((response) => {
        console.log("response:", response);
        localStorage.setItem("accessToken", response.data.accessToken);
        this.props.authenticate(response.data.user);
        this.props.history.push("/");
      });
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>LogIn</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;

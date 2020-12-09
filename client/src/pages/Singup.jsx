import React, { Component, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

// button.addEventListener("click")

function Signup(props) {
  const { form, handleChange, handleSubmit } = useAuth("signup", props);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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
function Signup5(props) {
  // we need to set some state

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    //  this.setState
    setForm({ ...form, [name]: value }); // {username:"", password:"", username:"a"} -> {username:"a", password:""}

    // if (name === "username") {
    //   setUsername(value);
    // } else if (name === "password") {
    //   setPassword(value);
    // }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("SUBMITTING FORM TO OUR BACKEND", this.state);
    // pretty please do a post request 🙏
    axios
      .post("http://localhost:5005/auth/signup", form)
      .then((response) => {
        console.log("response:", response);
        localStorage.setItem("accessToken", response.data.accessToken);
        props.authenticate(response.data.user);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  console.log("FORM VALUES CHANGING", form);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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

class Signup2 extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    // this.setState({
    //    [event.target.name]:event.target.value
    // })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING FORM TO OUR BACKEND", this.state);
    // pretty please do a post request 🙏
    axios
      .post("http://localhost:5005/auth/signup", this.state)
      .then((response) => {
        console.log("response:", response);
        localStorage.setItem("accessToken", response.data.accessToken);
        this.props.authenticate(response.data.user);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Signup</h2>
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

export default Signup;

// hooks component without the comments
function Signup3(props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value }); // {username:"", password:"", username:"a"} ->
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5005/auth/signup", form)
      .then((response) => {
        console.log("response:", response);
        localStorage.setItem("accessToken", response.data.accessToken);
        props.authenticate(response.data.user);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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

// hooks component without the comments
function Signup4(props) {
  const { form, handleChange, handleSubmit } = useAuth();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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

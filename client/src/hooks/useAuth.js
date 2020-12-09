import { useState } from "react";
import axios from "axios";

export function useAuth(value, props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value }); // {username:"", password:"",
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:5005/auth/${value}`, form)
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

  return {
    handleSubmit,
    form,
    handleChange,
  };
}

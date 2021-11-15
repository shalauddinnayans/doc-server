import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
const Register = () => {
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("retype password");
      return;
    } else {
      registerUser(
        loginData.email,
        loginData.password,
        loginData.name,
        history
      );
    }
    e.preventDefault();
  };
  return (
    <div>
      <Navigation />
      <form onSubmit={handleRegisterSubmit}>
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          type="email"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          type="password"
          onBlur={handleOnBlur}
        />
        <TextField
          required
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password2"
          type="password"
          onBlur={handleOnBlur}
        />
        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
          register
        </Button>
      </form>
      <NavLink to="/login">Have Accout</NavLink>
      <Footer />
    </div>
  );
};

export default Register;

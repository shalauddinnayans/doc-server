import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Login = () => {
  const { loginUser, user, isLoading, authError, logInWithGoogle } = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleGoogleLogin = () => {
    logInWithGoogle(location, history);
  };
  const handleLogingSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Navigation />
      <Container>
        <form onSubmit={handleLogingSubmit}>
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
          <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
            Login
          </Button>
        </form>
        <Button
          sx={{ width: "75%", m: 1 }}
          onClick={handleGoogleLogin}
          variant="contained"
        >
          Google Login
        </Button>
        <NavLink to="/login">Have Accout</NavLink>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;

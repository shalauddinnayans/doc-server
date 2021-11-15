import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch("http://localhost:5000/users/admin", {
      method: "put",
      headers: {
        // authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          // setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAdminSubmit}>
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
        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;

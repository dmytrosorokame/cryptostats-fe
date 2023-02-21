import { Button, TextField, Link as MuiLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Email" className="w-80" type="email" required />
        <TextField label="Password" className="w-80" type="password" required />
        <Link to="/login" className="justify-self-start self-start mt-2">
          <MuiLink>Login</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80">
        <span className="p-1">Sign up</span>
      </Button>
    </div>
  );
};

export default SignUpForm;

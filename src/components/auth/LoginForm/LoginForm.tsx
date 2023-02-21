import { Button, TextField, Link as MuiLink } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleLogin = () => {
    setEmailErrored(!email);
    setPasswordErrored(!password);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          className="w-80"
          type="email"
          required
          helperText={emailErrored && "Please, provide a valid email!"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailErrored}
        />
        <TextField
          label="Password"
          className="w-80"
          type="password"
          required
          helperText={passwordErrored && "Please, provide a valid password!"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordErrored}
        />
        <Link to="/sign-up" className="justify-self-start self-start mt-2">
          <MuiLink>Sign up</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleLogin}>
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};

export default LoginForm;

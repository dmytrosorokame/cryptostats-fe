import { Button, TextField, Link as MuiLink } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../api/auth.api";
import { useAppDispatch } from "../../../app/hooks";
import { User } from "../../../models/User";
import { setAuthState } from "../../../slices/auth.slice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const [login] = useLoginMutation();

  const handleLogin = async () => {
    setEmailErrored(!email);
    setPasswordErrored(!password);

    if (!email || !password) return;

    try {
      const response = (await login({ email, password })) as { data: User };

      dispatch(setAuthState({ user: response.data }));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
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

import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import Routes from "./routes/routes";
import { useGetUserQuery } from "./api/users.api";
import { useAppDispatch } from "./app/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthState } from "./slices/auth.slice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: user } = useGetUserQuery(undefined);

  useEffect(() => {
    if (!user) return;

    dispatch(setAuthState({ user }));
    navigate("/");
  }, [user, dispatch, navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;

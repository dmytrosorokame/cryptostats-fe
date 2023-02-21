import LoginForm from "./components/auth/LoginForm/LoginForm";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;

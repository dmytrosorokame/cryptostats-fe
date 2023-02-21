import LoginForm from "./components/auth/LoginForm/LoginForm";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import Routes from "./routes/routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

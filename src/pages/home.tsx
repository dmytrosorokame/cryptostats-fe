import { Button } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URL) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URL;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Button variant="contained" size="large" onClick={handleConnectCoinbase}>
        Connect Coinbase
      </Button>
    </div>
  );
};

export default HomePage;

import React, {useEffect} from "react";
import {
  ThemeProvider,
  Typography,
  createTheme
} from "@mui/material";

const defaultTheme =createTheme();


const HomePages = () => {

useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography style={{ fontSize: "50px", fontWeight: "bold", color: "black" }}>
        Hello Travel
      </Typography>
    </ThemeProvider>
  );
};

export default HomePages;

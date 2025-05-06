import React, {useEffect} from "react";
import {
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import getTheme from './theme';
import { useSelector } from "react-redux";



const HomePages = () => {

  const mode =useSelector((state)=>state.theme.mode);
  const theme =getTheme(mode);



useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Typography style={{ fontSize: "50px", fontWeight: "bold", color: "black" }}>
      {t('welcome')}
      </Typography>
    </ThemeProvider>
  );
};

export default HomePages;

import { createTheme } from "@mui/material";

const getTheme = (mode = "light")=>
    createTheme({
        palette:{
            mode,
            ...(mode === "light" ?
            {
                primary : {main : "#1976d2"},
                background: {default: "#ffffff"},
                text: {primary:"#000000"}
            } :
            {
                primary: { main: "#90caf9" },
                background: { default: "#121212" },
                text: { primary: "#ffffff" },
            }),
        },
        typography:{
            fontFamily: "Roboto, Arial, sans-serif",
        }
    });

    export default getTheme;
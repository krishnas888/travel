import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/features/themeReducer";

const ThemeToggle = () => {
    const dispatch= useDispatch();
    const theme = useSelector((state)=>state.theme.mode);

    return(
        <button onClick = {() => dispatch(toggleTheme())}>
            Switch to {theme === "light" ? "dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;
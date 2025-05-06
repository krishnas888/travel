import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/features/settingsSlice";

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const language = useSelector((state)=> state.setting.language);

    return (
        <select
        value={language}
        onChange={(e) => dispatch(setLanguage(e.target.value))}
        >
            <option value="en">English</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
            <option value="ka">Kannada</option>
        </select>
    )
};

export default LanguageSelector;
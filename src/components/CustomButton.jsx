import { Link } from 'react-router-dom';
import React from "react";
const CustomButton = ({ text, color, routeTo }) => {
    return (
        <Link className={`main-button `} style={{ color: `${color}` }} to={`${routeTo}`}>
            <span className="transition" />
            <span className="gradient" />
            <span className="label">{text}</span>
        </Link>
    )
}

export default CustomButton;
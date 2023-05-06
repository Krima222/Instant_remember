import React from 'react';
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home-page');
    };

    return (
        <>
            <button onClick={handleClick}>HomePage</button>
            <div>aaaaaaaaa</div>
        </>
    )
}
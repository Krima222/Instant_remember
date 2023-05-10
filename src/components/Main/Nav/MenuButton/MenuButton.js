import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './MenuButton.module.scss'


export function MenuButton({ label, icon, to}) {
    const navigate = useNavigate()
    return (
        <div className={classes.menubutton}>
            <button
                onClick={() => navigate(to)}
                className={classes.menubutton__button}
            >
                <img src={icon} alt="icon" />
                <div>
                    <span className={classes.menubutton__text}>{label}</span>
                </div>
            </button>
            
        </div> 
    )
}
import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Main.module.scss'

import { Header } from '../Header/Header';
import { Nav } from '../Profile/Nav/Nav';
import { Menu } from '../Profile/Nav/Menu/Menu';

export function Main() {

    return (
        <div className={classes.main}>
            <div className={classes.main__header}>
               <Header /> 
            </div>
            <div className={classes.main__wrapper}>
               <div className={classes.main__nav}>
                    <Nav>
                        <Menu />
                    </Nav> 
                </div>
                <div className={classes.main__content}>
                    <Outlet />  
                </div> 
            </div>
        </div>
    )
}
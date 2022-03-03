import React from 'react';
import TopBar from '../mycomponents/topBar/topBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NordTheme } from '../values/colors';

export default function Layout({navs}) {
    const bgStyle = {
        backgroundColor: NordTheme.nord0,
        height: '100vh',
        width: '100vw',
        display: 'flex'
    };

    return(
        <React.Fragment>
            <TopBar navs = {navs}/>
            <div style = {bgStyle}>
                <Outlet/>
            </div>
        </React.Fragment>
    );
}
import React from 'react';
import TopBar from '../myComponents/topBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NordTheme } from '../values/colors';

export default function Layout({navs}) {
    const bgStyle = {
        backgroundColor: NordTheme.nord0,
        height: '100vh',
        width: '100vw'
    };

    return(
        <div style = {bgStyle}>
            <TopBar navs = {navs}/>
            <Outlet/>
        </div>
    );
}
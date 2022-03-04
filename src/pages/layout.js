import React from 'react';
import TopBar from '../myComponents/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';

export default function Layout({navs}) {
    return(
        <div className = "layout-body">
            <TopBar navs = {navs}/>
            <Outlet/>
        </div>
    );
}
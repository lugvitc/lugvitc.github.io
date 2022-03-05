import React from 'react';
import TopBar from '../components/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';

export default function Layout({navs, dockItems}) {
    return(
        <div className = "layout-body">
            <TopBar navs = {navs}/>
            <Outlet/>
        </div>
    );
}
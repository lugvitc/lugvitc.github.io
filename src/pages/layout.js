import React from 'react';
import TopBar from '../components/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';
import Dock from '../components/dock';

export default function Layout({navs, dockItems}) {
    return(
        <div className = "layout-body">
            <TopBar navs = {navs}/>
            <div className = "layout-body-inner">
                <Dock items = {dockItems}/>
                <Outlet/>
            </div>
        </div>
    );
}
import React from 'react';
import TopBar from '../components/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';
import Dock from '../components/dock';

export default function Layout({navs, dockItems}) {
    return(
        <React.Fragment>
            <TopBar navs = {navs}/>
            <div className = "content">
                <Dock items = {dockItems}/>
                <Outlet/>
            </div>
        </React.Fragment>
    );
}
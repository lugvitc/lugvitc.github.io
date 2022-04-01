import React from 'react';
import TopBar from '../components/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';
import Dock from '../components/dock';
import Footer from '../components/footer';

export default function Layout({navs, dockItems}) {
    return(
        <React.Fragment>
            <TopBar navs = {navs}/>
            <main id = "content">
                <Dock items = {dockItems}/>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </React.Fragment>
    );
}
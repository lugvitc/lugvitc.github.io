import React from 'react';
import TopBar from '../components/topBar';
import { Outlet } from 'react-router-dom';
import './pages.css';
import Dock from '../components/dock';

/**
 * until the dock isn't finalized, i have put both
 * versions of layout (one with the dock and one without it)
 * when the dock is done, delete the 'without-dock' version
 */


// with dock:

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

// without dock:

// export default function Layout({navs, dockItems}) {
//     return(
//         <div className = "layout-body">
//             <TopBar navs = {navs}/>
//             <Outlet/>
//         </div>
//     );
// }
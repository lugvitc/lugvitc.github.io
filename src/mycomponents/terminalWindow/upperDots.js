import React from 'react';
import { NordTheme } from '../../values/colors';
import UpperDot from './upperDot';

export default function UpperDots() {
    return (
        <div style = {{display: "flex", gap: "5px", margin: "10px 10px"}}>
            <UpperDot color = {NordTheme.nord11}/>
            <UpperDot color = {NordTheme.nord13}/>
            <UpperDot color = {NordTheme.nord14}/>
        </div>
    );
}
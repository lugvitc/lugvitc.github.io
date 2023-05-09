import TerminalWindow from '../../components/terminal/terminalWindow';
import TerminalCard from '../../components/terminalCard/TerminalCard';
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Blogs() {

    const myStyle={
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around",
        alignItems:"center",
    };

    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd blogs' },
                { path: '~/blogs', command: 'cat blogs.txt' }
            ]}
            title='Blogs'
        > 
        <div className="posts" style={myStyle}>
            {/* <div className="div1">
                </div>
                <div className="div2">
                    </div> */}

            <TerminalCard
            title='Blog1'>
            </TerminalCard>

            <TerminalCard
            title='Blog2'>
            </TerminalCard>
            <TerminalCard
            title='Blog3'>
            </TerminalCard>
            <TerminalCard
            title='Blog4'>
            </TerminalCard>


        </div>
            
        </TerminalWindow>
        
    );
}

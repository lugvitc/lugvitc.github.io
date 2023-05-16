import TerminalWindow from '../../components/terminal/terminalWindow';
import TerminalCard from '../../components/terminalCard/TerminalCard';
// import useFetch from "../../hooks/useFetch";
// import { useEffect } from 'react';
// import { useState } from 'react';

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
            title='Blog1'
            date = 'dd/mm/yy'
            department= 'dep'
            summary=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores quaerat necessitatibus deserunt cumque ea architecto suscipit molestiae cupiditate, dolorum enim distinctio numquam nam magni dolores illo, sequi eius sit tenetur mollitia modi, temporibus quod maxime similique? Ratione debitis nam qui eius id dolorem voluptatibus quo et doloribus perspiciatis? Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '>
            </TerminalCard>

            <TerminalCard
            title='Blog2'
            date = 'dd/mm/yy'
            department= 'dep'
            summary=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores quaerat necessitatibus deserunt cumque ea architecto suscipit molestiae cupiditate, dolorum enim distinctio numquam nam magni dolores illo, sequi eius sit tenetur mollitia modi, temporibus quod maxime similique? Ratione debitis nam qui eius id dolorem voluptatibus quo et doloribus perspiciatis? Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '>
            </TerminalCard>
            <TerminalCard
            title='Blog3'
            date = 'dd/mm/yy'
            department= 'dep'
            summary=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores quaerat necessitatibus deserunt cumque ea architecto suscipit molestiae cupiditate, dolorum enim distinctio numquam nam magni dolores illo, sequi eius sit tenetur mollitia modi, temporibus quod maxime similique? Ratione debitis nam qui eius id dolorem voluptatibus quo et doloribus perspiciatis? Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '>
            </TerminalCard>
            <TerminalCard
            title='Blog4'
            date = 'dd/mm/yy'
            department= 'dep'
            summary=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores quaerat necessitatibus deserunt cumque ea architecto suscipit molestiae cupiditate, dolorum enim distinctio numquam nam magni dolores illo, sequi eius sit tenetur mollitia modi, temporibus quod maxime similique? Ratione debitis nam qui eius id dolorem voluptatibus quo et doloribus perspiciatis? Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam '>
            </TerminalCard>


        </div>
            
        </TerminalWindow>
        
    );
}

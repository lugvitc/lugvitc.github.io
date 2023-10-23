import { useState, useEffect } from 'react';
import { Colors } from '../styles/colors';
import TerminalWindow from '../components/terminal/terminalWindow';
import ShowAfterTypewriter from '../components/showAfterTypewriter/showAfterTypwriter';

// import nixos from "../images/nixos.png";
import tails from "../images/pngkey.com-tails-png-2315158.png";
// import blackArch from "../images/blackarchlogo-removebg-preview.png";

import cd1 from '../images/coding-ninja/codingNinja-2.jpeg'
import cd2 from '../images/coding-ninja/codingNinja-1.jpeg'
import cd3 from '../images/coding-ninja/codingNinja-3.jpeg'
import cd4 from '../images/coding-ninja/codingNinja-4.jpg'


export default function Home() {

    const bg_dark = { backgroundColor: "#212529" };
    const prompts = [{ path: '~', command: 'sudo lug' }];
    const [a, setA] = useState(0);

    useEffect(() => {
        // Set a timeout to change the state after 3 seconds (3000 milliseconds)
        const timeoutId = setTimeout(() => {
            setA(1);
        }, 3000);

        // Clear the timeout if the component unmounts or the dependency changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    const distro = [
        {
            id: "distro1",
            image: cd1,
            title: "Take the Challenge",
            desc: "So are you up for the challenge?💪  Unleash your potential and seize the opportunity to test your abilities, all while elevating your Linux passion."
        },
        {
            id: "distro2",
            image: cd4,
            title: "Coding Ninja",
            desc: "Coding Ninja focuses on making coding accessible and helping learners excel in competitive programming and software development.Coding Ninjas strives to bridge the knowledge gap in programming by offering comprehensive courses, coding challenges, and mentorship, enabling students to excel in tech careers and competitive coding competitions."
        },
        {
            id: "distro3",
            image: cd3,
            title: "Prizes",
            desc: "Here’s what all you can win-> Achiever Certificates for the Top 3 Contest Winners every week,Exclusive T-shirt , Laptop Bag, and Swag Set,Stylish Sipper Bottle and Mug,And not to mention-Eternal Glory!!"
        }
    ];
    

    return (
        <>
            <TerminalWindow title='lugvitc' prompts={prompts}>
                [sudo] password for lugvitc:{' '}
                <ShowAfterTypewriter
                    textContainer={text => (
                        <span style={{ color: Colors.nord11 }}>{text}</span>
                    )}
                    text='*************'
                >
                   <br />
                <h1>Linux Club VIT, Chennai</h1>
                The 'Linux Club' of VIT, Chennai was created to spread
                awareness of Free and Open Source Software (FOSS) through Linux
                flavours. It believes in developing collaborative open-source
                projects.
                <br />
                It encourages users to understand the systems and softwares they
                use on a fundamental level. Which can be achieved only using
                non-proprietary tools.
                <br />
                It aims to get members to contribute to FOSS, make them more
                industry ready and to promote GNU/Linux in General.
                <br />
                    <span style={{ color: Colors.nord11 }}>L</span>
                    <span style={{ color: Colors.nord12 }}>I</span>
                    <span style={{ color: Colors.nord13 }}>N</span>
                    <span style={{ color: Colors.nord14 }}>U</span>
                    <span style={{ color: Colors.nord10 }}>X</span>
                    <span style={{ color: Colors.nord15 }}>!</span>
                </ShowAfterTypewriter>
            </TerminalWindow>
            <div className='flex flex-wrap justify-center items-center gap-10 mt-5'>
                {
                    a === 1 &&
                    distro.map((d) => (
                        <a href="https://lugvitc.org/#/codewars">

                        <div key={d.id} style={bg_dark} className={`home-distro-card `}>
                            <img className='w-[18rem] h-[23rem] rounded-lg' src={d.image} alt="distro" />
                            <div className={'overlay'}>
                                <h1 className={"text-[2rem] text-white"}>
                                    {d.title}
                                </h1>
                                <p className={`w-80 z-[10] text-white `}>{d.desc}
                                </p>
                            </div>
                        </div>
                        </a>
                    ))
                }
            </div>
        </>
    );
}


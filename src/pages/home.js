import { useState, useEffect } from 'react';
import { Colors } from '../styles/colors';
import TerminalWindow from '../components/terminal/terminalWindow';
import ShowAfterTypewriter from '../components/showAfterTypewriter/showAfterTypwriter';

import nixos from "../images/nixos.png";
import tails from "../images/pngkey.com-tails-png-2315158.png";
import blackArch from "../images/blackarchlogo-removebg-preview.png";

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
            image: nixos,
            title: "NixOS",
            desc: "It is known for its reproducible builds and deployments, declarative system configuration, and reliable system upgrades. It follows a different approach to package management, ensuring that your system does not break easily. If you encounter any issues after an upgrade or installation, you can always roll back to a previous system state."
        },
        {
            id: "distro2",
            image: tails,
            title: "Tails",
            desc: "Tails is a unique computer operating system. It is designed to help you use the Internet anonymously and get around censorship. Tails is a live operating system that runs from a USB stick or DVD. It lets you connect to the Internet using virtually any computer while leaving no trace of your activities after you have finished."
        },
        {
            id: "distro3",
            image: blackArch,
            title: "BlackArch",
            desc: "BlackArch Linux is a penetration testing distribution based on Arch Linux. It is designed for penetration testers and security researchers, and it contains over 2872 tools that can be installed individually or in groups."
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
                        <div key={d.id} style={bg_dark} className={`home-distro-card `}>
                            <img className='w-[17rem]' src={d.image} alt="distro" />
                            <div className={'overlay'}>
                                <h1 className={"text-[2rem] text-white"}>
                                    {d.title}
                                </h1>
                                <p className={`w-80 z-[10] text-white `}>{d.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}


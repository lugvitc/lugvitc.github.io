import LugLink from '../../components/lugLink/lugLink';

export default function Session1() {
    return (
        <>
            <section>
                <h2>What is Linux</h2>
                <ul>
                    <li>
                        When most people say 'Linux', they are talking about the
                        OS, a free (libre) and open source Operating System.
                    </li>
                    <li>
                        To be more precise Linux is the name of the OS Kernel
                        (the core of an operating system) which is just one part
                        of a larger system composed of other free and open
                        source software (FOSS). When someone says that they are
                        using 'Linux', they are probably using what's called a
                        Linux distribution.
                    </li>
                    <li>
                        A Linux Distribution is a complete operating system
                        which includes the Linux Kernel, a package manager, a
                        desktop environment, device drivers, among other things.
                    </li>
                    <li>
                        A lot of these software are a part of the GNU software
                        project thus, Linux is also referred to as GNU/Linux.
                    </li>
                    <li>
                        Linux was created by Linus Torvalds in 1991. It was
                        inspired by MINIX, another OS kernel in the Unix-like
                        family of operating systems.
                    </li>
                </ul>
            </section>
            <section>
                <h2>Linux Distributions</h2>
                <h3>The Linux Family Tree</h3>
                The customizability and freedom offered by linux has resulted in
                a number of different distributions (or 'distros'). You can
                checkout a timeline or a 'family-tree' of Linux distros{' '}
                <LugLink link='https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg'>
                    here
                </LugLink>
                <h3>Which distribution to Choose</h3>
                Whether its gaming, productivity, customization, cybersecurity
                or just an easier dev experience, each distro has something
                unique to offer. Take a look at the list below to see a few of
                the most popular distributions and their advantages:
                <ol>
                    <li>
                        Debian:
                        <ul>
                            <li>Stable and Dependable</li>
                            <li>Largest Community</li>
                            <li>Good support</li>
                            <li>
                                <code>apt</code> package manager
                            </li>
                        </ul>
                    </li>
                    <li>
                        Gentoo:
                        <ul>
                            <li>Used by experts and developers.</li>
                            <li>Complete choice of packages.</li>
                            <li>You get to build everything from source.</li>
                            <li>
                                <code>portage</code> package manager
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ubuntu:
                        <ul>
                            <li>The most popular distro</li>
                            <li>Designed for beginners</li>
                            <li>User-friendly, elegant UI</li>
                            <li>
                                <code>apt</code> package manager.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Linux Mint:
                        <ul>
                            <li>
                                Popular, community-driven distro based on Ubuntu
                            </li>
                            <li>Fast, simple and good for day-to-day used.</li>
                            <li>Ubuntu-based distro without snap packages</li>
                            <li>
                                <code>apt</code> package manager.
                            </li>
                        </ul>
                    </li>
                    <li>
                        RHEL:
                        <ul>
                            <li>Used in enterprise</li>
                            <li>Highly secure</li>
                            <li>Good for server-environments</li>
                        </ul>
                    </li>
                    <li>
                        Kali/ParrotOS
                        <ul>
                            <li>Debian-based</li>
                            <li>
                                Oriented towards cybersecurity and penetration
                                testing
                            </li>
                            <li>Secure</li>
                            <li>
                                <code>apt</code> package manager.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Pop OS:
                        <ul>
                            <li>Best gaming support</li>
                            <li>Elegant and beautiful UI</li>
                            <li>Window tiling support out of the box.</li>
                            <li>Good support for Nvidia drivers</li>
                            <li>
                                <code>apt</code> package manager.
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2>Why do we need it?</h2>
                Linux is used worldwide, from webservers to android phones to
                desktops to smart appliances. Almost every device needs an
                operating system and Linux being free of cost and infinitely
                customizable fits the bill perfectly. <br />
                Windows vs Linux:
                <ul>
                    <li>
                        Linux is not a replacement or a separate 'version' of
                        Windows, it is more of an alternative to it. Both are
                        operating system, with Windows being a propietary aka
                        closed source OS.
                    </li>
                    <li>
                        End users can't modify windows (they can but only in the
                        way Microsoft allows them to).
                    </li>
                </ul>
            </section>
            <section>
                <h2>Installation</h2>
            </section>
        </>
    );
}

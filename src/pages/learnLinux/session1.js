import LugLink from '../../components/lugLink/lugLink';
import linuxFamilyTree from '../../images/simplifiedLinuxFamily.png';
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
                . A simplified version of the Linux family tree is shown below.
                <br />
                <br />
                <center>
                    <img src={linuxFamilyTree} />
                </center>
                <br />
                <br />
                <ul>
                    <li>The very first linux based OS is the GNU Linux.</li>
                    <li>Linux is the kernel, GNU Linux is the OS.</li>
                    <li>
                        Major parent Linux distros in the family tree are:
                        Debian, Slackware, Red Hat, Arch etc.
                    </li>
                    <li>
                        All the distros under the same family use the same
                        package manager.
                    </li>
                </ul>
                <h3>Which distribution to Choose?</h3>
                As seen in the Linux family tree, there are tons of Linux
                distros. So which distro is the right one for you? The best
                answer is to try it out yourself. When you switch between
                distros and use a couple of them, you get to know which one is
                the best for your usage. Whether its gaming, productivity,
                customization, cybersecurity or just an easier dev experience,
                each distro has something unique to offer. So just as a heads
                up, we have provided a list of the most popular distributions
                and their advantages below which should help you in determining
                the right distribution for yourself :
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
                            <li>
                                <code>yum</code> package manager.
                            </li>
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
                    <li>
                        Arch:
                        <ul>
                            <li>Lightweight and flexible</li>
                            <li>
                                Designed for advanced users who understand and
                                configure their own system requirements
                            </li>
                            <li>
                                Dedicated Arch User Repository (AUR) which has
                                almost all software packages
                            </li>
                            <li>You get to build everything from binaries.</li>
                            <li>
                                <code>pacman</code> package manager.
                            </li>
                        </ul>
                    </li>
                </ol>
                Read more about the linux distributions and their usage in the
                below links.
                <br />
                <LugLink link='https://www.tecmint.com/linux-distro-for-power-users/'>
                    Resource 1
                </LugLink>
                <br />
                <LugLink link='https://www.stackscale.com/blog/popular-linux-distributions/'>
                    Resource 2
                </LugLink>
                <br />
                Try out running linux distros in a cloud server:
                <br />
                <LugLink link='https://distrotest.net/index.php'>
                    Resource 3
                </LugLink>
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
                Now, the installation process of every Linux distribution is
                different. Some distros would complete the entire installation
                process through GUI (like Ubuntu), whereas some would require
                you to complete the installation manually through every step
                (like Arch). Installing a distro can be done in two ways:
                <br />
                <br />
                <ol>
                    <li>
                        Dual Boot: Here, you partition your hard drive to make
                        your physical computer use 2 OS directly. The first is
                        the OS you are currently in, and the second one is the
                        Linux distro you are installing. This is a tougher way
                        but it is way more efficient than using a Virtual
                        Machine. Using Linux in Dual boot will give you far
                        better control than in Virtual Machine. But it can get
                        harder to use the distro for everyday purposes if you
                        are not much acquainted with linux (You can even break
                        your software and now your computer wont open until you
                        re-install the OS). Thus, our advice for this tutorial
                        would be to go with a Linux Virtual Machine and once you
                        are well acquainted with using Linux, you can switch to
                        this Dual Boot option. Its fun! We have attached a few
                        resources, which you can refer to install some common
                        Linux distros through Dual Boot:
                        <br />
                        <LugLink link='https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/'>
                            Blog Post: Dual Boot Ubuntu on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/-iSAyiicyQY'>
                            Video tutorial: Dual Boot Ubuntu on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://www.linuxtechi.com/dual-boot-arch-linux-windows-10/'>
                            Blog Post: Dual Boot Arch on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/L1B1O0R1IHA'>
                            Video tutorial: Dual Boot Arch on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://www.geeksforgeeks.org/dual-boot-kali-linux-with-windows/'>
                            Blog Post: Dual Boot Kali Linux on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/BRk71KypnBg'>
                            Video tutorial: Dual Boot Kali linux on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://blnlabs.com/dual-boot-pop-os-and-windows-10/'>
                            Blog Post: Dual Boot Pop!_OS on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/hbzCSjlbInY'>
                            Video tutorial: Dual Boot Pop!_OS on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://www.linuxfordevices.com/tutorials/linux/dual-boot-windows-10-and-linux-mint'>
                            Blog Post: Dual Boot Linux Mint on Windows
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/eL1jHhLcgTU'>
                            Video tutorial: Dual Boot Linux Mint on Windows
                        </LugLink>
                        <br />
                        <br />
                    </li>
                    <li>
                        Virtual Machine: This is a relatively simpler method to
                        install a linux distro in your system. Here, as the name
                        suggests, you use the Linux distribution virtually. That
                        is, the Linux distro runs on top of your current OS and
                        this is achieved by the usage of a Virtual Machine
                        Monitor (like VirtualBox or VMWare etc.). Here, you do
                        not have to worry about breaking your software. Because,
                        everything can be restored to its initial state easily.
                        Thus, VMs are a great way to experiment and learn when
                        you are using Linux for the first time. After you are
                        well acquainted with using a distro virtually, you can
                        switch to the Dual Boot option :D We have attached a few
                        resources, which you can refer to install some common
                        Linux distros through Virtual Machine in Virtual Box:
                        <br />
                        <LugLink link='https://www.geeksforgeeks.org/how-to-install-ubuntu-on-virtualbox/'>
                            Blog Post: Install Ubuntu VM
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/x5MhydijWmc'>
                            Video tutorial: Install Ubuntu VM
                        </LugLink>
                        <br />
                        <LugLink link='https://itsfoss.com/install-arch-linux-virtualbox/'>
                            Blog Post: Install Arch VM
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/_3-OMUQTf_k'>
                            Video tutorial: Install Arch VM
                        </LugLink>
                        <br />
                        <LugLink link='https://itsfoss.com/install-kali-linux-virtualbox/'>
                            Blog Post: Install Kali Linux VM
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/V_Payl5FlgQ'>
                            Video tutorial: Install Kali Linux VM
                        </LugLink>
                        <br />
                        <LugLink link='https://www.how2shout.com/linux/how-to-install-pop-os-in-virtualbox-virtual-machine/'>
                            Blog Post: Install Pop!_OS VM
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/qsB0gwrwIYQ'>
                            Video tutorial: Install Pop!_OS VM
                        </LugLink>
                        <br />
                        <LugLink link='https://itsfoss.com/install-linux-mint-in-virtualbox/'>
                            Blog Post: Install Linux Mint VM
                        </LugLink>
                        <br />
                        <LugLink link='https://youtu.be/aisUxv2S3gk'>
                            Video tutorial: Install Linux Mint VM
                        </LugLink>
                        <br />
                    </li>
                </ol>
            </section>
        </>
    );
}


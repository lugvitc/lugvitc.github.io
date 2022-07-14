import CodeBlock from '../../components/codeBlock/codeBlock';

export default function Session4() {
    return (
        <>
            <section>
                <h2>Processes</h2>
                <p>
                    A Process is a program under execution. The concept of
                    Processes is related more to the Operating System. Every OS
                    deal with processes in order to achieve a particular job. A
                    job is a complete unit of work under execution. To put it
                    simply, Jobs are a collection of Processes which work to
                    perform a specific task. Everything you do in Linux is
                    associated with a process in the background. For example,
                    clicking on a button, opening folders, opening terminal,
                    opening Apps, running code etc. all are powered by processes
                    in the background.
                </p>
                <p>
                    Every process has a Process ID (PID) and a Parent Process ID
                    (PPID) attached to it. The <code>init</code> process is the
                    parent process of all the processes running in the OS. And
                    every process gets forked by a parent process. For example,
                    if you open Chromium app, a new process gets forked from the
                    parent <code>init</code> process in the name of{' '}
                    <code>chromium</code>. Then again if you open a new tab in
                    the Chromium app, a new process again gets forked from its
                    parent <code>chromium</code> process in the name of{' '}
                    <code>tab1</code>.
                </p>
                <h3> Process states </h3>
                <p>
                    Every process goes through a sequence of states before its
                    completed (called as process life cycle).
                </p>
                <ol>
                    <li>
                        {' '}
                        R: Running or Runnable state. A process starts with this
                        state as it attempts to complete its execution.{' '}
                    </li>
                    <li>
                        {' '}
                        S: Sleeping state. A process goes to this state when it
                        needs resources that are currently not available (for
                        e.g. waiting for user input). It automatically comes out
                        of sleep state when the resources are made available by
                        the CPU.{' '}
                    </li>
                    <li>
                        {' '}
                        D: Uninterruptable sleeping state. If a process reaches
                        this state, you can not kill the process or suspend it.
                        It will only be terminated after it acquires the
                        resource it is waiting for.
                    </li>
                    <li>
                        {' '}
                        T: Stopped or Traced state. This is a state where the
                        process is suspended temporarily due to multiple reasons
                        (maybe suspended by the user). You can resume the
                        process execution from this state by bringing it to the
                        running state again.{' '}
                    </li>
                    <li>
                        {' '}
                        Z: Zombie state. This is a state where the process is
                        orphaned. This happens when the parent process is
                        terminated before the child process. This process will
                        only be terminated when the <code>init</code> process
                        gets terminated.{' '}
                    </li>
                </ol>

                <h3> Process Monitoring </h3>
                <p>
                    Since every command/application is powered by processes in
                    the background, you can control the applications usage by
                    monitoring processes. The <code>htop</code> command or the {' '} 
	            <code>ps -aux</code> command shows you the list of all processes 
	            running and shows what are the resources grabbed by them. It is a 
	            responsive output, meaning it refreshes the list of output every 3 
	            seconds so you can monitor the processes at a single place.
                </p>
                <h3> Background and Foreground jobs </h3>
                <p>
                    Foreground is the normal terminal interface where you type a
                    command, wait for its response and then type another command
                    and so on. So, on Foreground you can work with only a single
                    command at a time. But with background, you can work with
                    multiple commands at the same time. As the name suggests,
                    here, you put a job execution to run in the background, and
                    then you can run another job on the foreground at the same
                    time! You can even put multiple jobs to run in the
                    background while you are working on the foreground!
                </p>
                <p>
                    Append the <code>&amp;</code> to the command to execute it
                    in the background.
                </p>

                <CodeBlock>sleep 10000 &amp;</CodeBlock>
                <p>To list all the jobs running in background use command</p>

                <CodeBlock>jobs</CodeBlock>
                <p>
                    To bring a job execution from background to foreground, use
                    command
                </p>
                <CodeBlock>fg %[jobnumber]</CodeBlock>

                <p>
                    To push a job back into the background from foreground, use
                    command
                </p>
                <CodeBlock>Ctrl+Z</CodeBlock>
	        
	        <p>
	            To resume execution of a suspended job in the background, u
	            se command
	        </p>
	        <CodeBlock>bg %[jobnumber]</CodeBlock>
            </section>

            <section>
                <h2>Package Managers</h2>
                <p>
                    Most Linux distributions include a <em>package manager</em>,
                    which a software to install and manage installed software on
                    your system.
                </p>

                <h2>The Default Package Manager</h2>
                <p>
                    Debian-based systems (Ubuntu, Pop!_OS, Parrot OS, Kali
                    Linux, etc.) use <code>apt</code>. Arch-based systems use{' '}
                    <code>pacman</code>.
                </p>

                <table style={{ marginBlock: '1em' }}>
                    <thead>
                        <tr>
                            <th>Package Manager</th>
                            <th>
                                <code>apt</code>
                            </th>
                            <th>
                                <code>pacman</code>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Distributions</td>
                            <td>
                                Debian, Ubuntu, Pop!_OS, Kali Linux, Parrot OS
                            </td>
                            <td>Arch</td>
                        </tr>
                        <tr>
                            <td>Searching for a Package</td>
                            <td>
                                <CodeBlock>
                                    sudo apt search &lt;name&gt;
                                </CodeBlock>
                            </td>
                            <td>
                                <CodeBlock>
                                    sudo pacman -Ss &lt;name&gt;
                                </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>Installing a Package</td>
                            <td>
                                <CodeBlock>
                                    sudo apt install &lt;name&gt;
                                </CodeBlock>
                            </td>
                            <td>
                                <CodeBlock>
                                    sudo pacman -S &lt;name&gt;
                                </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>Removing a Package</td>
                            <td>
                                <CodeBlock>
                                    sudo apt remove &lt;name&gt;
                                </CodeBlock>
                            </td>
                            <td>
                                <CodeBlock>
                                    sudo pacman -R &lt;name&gt;
                                </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>Listing all Packages</td>
                            <td>
                                <CodeBlock>sudo apt list</CodeBlock>
                            </td>
                            <td>
                                <CodeBlock>sudo pacman -Qe</CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>Updating/Upgrading the System</td>
                            <td>
                                <CodeBlock>
                                    sudo apt update &amp;&amp; sudo apt upgrade
                                    -y
                                </CodeBlock>
                            </td>
                            <td>
                                <CodeBlock>sudo pacman -Syu</CodeBlock>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Flatpak</h2>
                <p>
                    A flatpak is a simple way of installing packages without
                    worrying about dependencies, linux distributions, runtimes,
                    etc.
                </p>
                <h3>Installation</h3>
                <p>
                    You can install using <code>apt</code> or{' '}
                    <code>pacman</code>
                </p>
                <CodeBlock>sudo apt install flatpak</CodeBlock>
                <CodeBlock>sudo pacman -S flatpak</CodeBlock>

                <h3>Flathub</h3>
                <p>
                    Flathub is a <em>remote</em> or remote repository of flatpak
                    packages. Most flatpaks you will need will be avialable in
                    Flathub, so it is worth it to install it.
                </p>
                <CodeBlock>
                    flatpak remote-add --if-not-exists flathub
                    https://flathub.org/repo/flathub.flatpakrepo
                </CodeBlock>
                <h3>Basics</h3>
                <h4>Listing Packages</h4>
                <CodeBlock>flatpak list --app</CodeBlock>
                <h4>Installation</h4>
                <CodeBlock>
                    flatpak install &lt;remote&gt; &lt;name&gt;
                </CodeBlock>
                <h4>Uninstalling</h4>
                <CodeBlock>
                    flatpak uninstall &lt;remote&gt; &lt;name&gt;
                </CodeBlock>
                <h4>Updating</h4>
                <CodeBlock>flatpack update</CodeBlock>
            </section>
        </>
    );
}


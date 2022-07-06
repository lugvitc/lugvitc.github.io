import CodeBlock from '../../components/codeBlock/codeBlock';
import TerminalWindow from '../../components/terminal/terminalWindow';

import blinkStyle from '../../components/showAfterTypewriter/showAfterTypewriter.module.css';

// know the terminal
export default function Session2() {
    return (
        <>
            <section>
                <h2>What is the terminal?</h2>
                <h3>History</h3>
                <p>
                    Back in the olden days, when computers took up half a room
                    and costed more than a car, it wasn't possible for everyone
                    to have a separate machine. This was a problem as a lot of
                    computers used to be located in universities where many
                    people might want access.
                </p>
                <p>
                    So, devices called 'terminals' were used to facilitate
                    communication between the user and the host machine. They
                    used to be CRT monitors and a keyboard which would allow
                    users to send text-based commands to the host.
                </p>
                <p>
                    Over time, as computers became cheap and easy to mass
                    produce, the need for physical terminals declined. However,
                    people still wanted to use the familiar terminal-host
                    paradigm. This led the creation of terminal emulators.
                </p>
                <h3>Terminal Emulators</h3>
                <p>
                    A terminal emulator is a piece of software which emulates or
                    replicates the functionality of a physical terminal in
                    software.
                </p>
                <p>
                    Even now if you open a 'terminal' in your machine, you are,
                    in fact opening a terminal emulator.
                </p>
                <h3>Shells</h3>
                <p>
                    A 'shell' is exactly what it sounds like, it is a 'cover'
                    around the operating system. It allows us to use complex
                    operating system functionality by using simplified commands.
                </p>
                <p>
                    There exist many different kinds of shells but in the Unix
                    world the 'Bourne Shell' or 'sh' was the most prominent.
                    Building on 'sh', the 'Bourne Again Shell' or <em>bash</em>{' '}
                    was created. Most GNU/Linux systems today use bash or some
                    variation of it like zsh, fish, etc.
                </p>
            </section>
            <section>
                <h2>Terminal Basics</h2>
                <p>
                    Now, boot up your VM/machine and open the terminal. If you
                    have a DE, try to find an icon for the terminal or simply
                    press <code>ctrl</code> + <code> alt</code> + <code>t</code>{' '}
                    or <code>super/windows</code> + <code>t</code>.
                </p>
                <p>You will find a window looking something like this:</p>
                <p
                    style={{
                        backgroundColor: 'var(--nord0)',
                        padding: '1em',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <TerminalWindow title='bash'>
                        <span style={{ color: 'var(--nord11)' }}>sam</span>@
                        <span style={{ color: 'var(--nord13)' }}>
                            pop-hp-2020
                        </span>
                        <span style={{ color: 'var(--nord14)' }}> ~ </span> ${' '}
                        <span className={blinkStyle.text} />
                    </TerminalWindow>
                </p>
                <h3>The prompt</h3>
                <p>This is the terminal prompt.</p>
                <p>
                    The part in red, <code>sam</code> shows the current user.
                </p>
                <p>
                    The part in yellow, <code>pop-hp-2020</code> shows the name
                    of the machine.
                </p>
                <p>
                    {' '}
                    The part in green, <code>~</code> shows the{' '}
                    <em>current working directory</em>. This is the folder that
                    is currently open in the current terminal session.
                </p>
                <p>
                    {' '}
                    After that, you see a <em>$</em> sign which signifies you
                    are not the <em>root</em> user (we will come that in another
                    session, but think of it as an admin account).
                </p>
                <p>
                    Finally, you can see an inviting cursor, blinking happily to
                    show that the shell is ready to accept commands.
                </p>
                <h3>Terminal Commands</h3>
                <p>
                    All of the communication you do with the shell is done
                    through commands. Below, you can see an example of a
                    command, pay close attention to the syntax.
                </p>
                <p
                    style={{
                        backgroundColor: 'var(--nord0)',
                        padding: '1em',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <TerminalWindow title='bash'>
                        <span style={{ color: 'var(--nord11)' }}>sam</span>@
                        <span style={{ color: 'var(--nord13)' }}>
                            pop-hp-2020
                        </span>
                        <span style={{ color: 'var(--nord14)' }}> ~ </span> ${' '}
                        <span className={blinkStyle.text}>
                            ls -l --block-size K ~
                        </span>
                    </TerminalWindow>
                </p>
                <p>
                    The command is <code>ls</code> or 'list'. It is used to list
                    the contents of the currently open folder. To execute a
                    command, we simply write the name along with any required
                    arguments, flags or switches.
                </p>
                <p>
                    The arguments a command takes are the most important values
                    essential to functionality, in the above command{' '}
                    <code>~/Documents</code> is the argument. It tells the{' '}
                    <code>ls</code> command to show the contents of the '~' or
                    the home folder.
                </p>
                <p>
                    A flag is a short, usually optional argument which modifies
                    the output, here <code>-l</code> tells the command to show
                    the output in a 'long' format. Flags are usually a
                    single-letter preceeded by a <code>-</code>.
                </p>
                <p>
                    A switch is like a flag but is usually a whole word (or
                    mulitple words). Here, <code>--block-size</code> tells the
                    ls that we are giving it a size to show file sizes in, the
                    argument <code>K</code> for the switch tells it the format.
                </p>
                <p>
                    For those who are curious, the output of the above command
                    is given below
                </p>
                <p
                    style={{
                        backgroundColor: 'var(--nord0)',
                        padding: '1em',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <TerminalWindow title='bash'>
                        sam@pop-hp-2020 ~ $ ls -l --block-size K <br />
                        total 44K <br />
                        drwxrwxr-x 3 sam sam 4K May 19 12:23 Applications
                        <br />
                        drwxrwxr-x 3 sam sam 4K May 10 23:28 Arduino <br />
                        drwxr-xr-x 5 sam sam 4K Jun 19 16:25 BurpSuiteCommunity
                        <br />
                        drwxrwxr-x 13 sam sam 4K Jun 29 21:34 'Calibre Library'
                        <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:31 Code -&gt;
                        /mnt/sam/Code <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:33 CTFs -&gt;
                        /mnt/sam/CTFs <br />
                        drwxrwxr-x 2 sam sam 4K May 19 12:09 Desktop <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:28 Documents -&gt;
                        /mnt/sam/Documents <br />
                        drwxrwxr-x 3 sam sam 4K Jul 5 23:38 Downloads <br />
                        drwxrwxr-x 2 sam sam 4K Jun 10 16:57 Games <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:32 ISOs -&gt;
                        /mnt/sam/ISOs <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:29 Music -&gt;
                        /mnt/sam/Music
                        <br /> lrwxrwxrwx 1 sam sam 1K May 19 00:29 Pictures
                        -&gt; /mnt/sam/Pictures drwxr-xr-x 2 sam sam 4K Aug 17
                        2021 Public <br />
                        drwxrwxr-x 4 sam sam 4K Jun 10 20:32 Random-Scripts{' '}
                        <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:31 Software -&gt;
                        /mnt/sam/Software <br />
                        drwxr-xr-x 2 sam sam 4K Aug 17 2021 Templates <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:29 Videos -&gt;
                        /mnt/sam/Videos
                        <br /> lrwxrwxrwx 1 sam sam 1K May 19 00:33 VIT -&gt;
                        /mnt/sam/VIT <br />
                        lrwxrwxrwx 1 sam sam 1K May 19 00:33 VMs -&gt;
                        /mnt/sam/VMs <br />
                        drwxrwxr-x 5 sam sam 4K May 19 17:00 yEd
                        <br /> sam@pop-hp-2020 ~ ${' '}
                        <span className={blinkStyle.text} />
                    </TerminalWindow>
                </p>
            </section>
            <section>
                <h2>Terminal Basics</h2>
                <h3>Moving Around</h3>
                <h3>Command History</h3>
                <h3>Tab Completion</h3>
                <h3>Manual Pages</h3>
            </section>
            <section>
                <h2>Working with files</h2>
                <h3>File types</h3>
                <h3>File contents</h3>
                <h3>File Management</h3>
            </section>
        </>
    );
}


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
                <p>
                    In this section, we will learn about some terminal commands
                    which will help us to move around the filesystem, check the
                    command history and do some basic chores.
                </p>
                <h3>Moving Around</h3>
                <p>
                    <ol>
                        <li>
                            <code>cd</code>: The <code>cd</code> command stands
                            for change directory and it helps to navigate into
                            different directories according to their path. By
                            default, when you open the terminal, your working
                            directory is set to the home directory. Thus, you
                            can use the <code>cd</code> command to change to
                            sub-directories etc.
                            <br />
                            syntax : <code>cd /path/to/directory</code>
                            <br />
                            <CodeBlock>cd /etc/NetworkManager</CodeBlock>
                        </li>
                        <li>
                            <code>pwd</code>: The <code>pwd</code> command
                            stands for print working directory and it outputs
                            the current directory you are working upon. This is
                            helpful when you are working with many nested
                            directories, as it will give you the absolute path
                            of the current directory. You can then copy the
                            output of this command and use it with the{' '}
                            <code>cd</code> command to get into the dircetory.
                            <br />
                            syntax: <code>pwd</code>
                            <br />
                            <CodeBlock>pwd</CodeBlock>
                        </li>
                        <li>
                            <code>ls</code>: The <code>ls</code> command lists
                            the files/sub-directories present in the current
                            working directory. This command is often coupled
                            with the <code>cd</code> and <code>pwd</code>{' '}
                            command to effectively navigate into directories.
                            <br />
                            syntax: <code>ls</code>
                            <br />
                            <CodeBlock>ls</CodeBlock>
                        </li>
                    </ol>
                </p>
                <h3>Command History</h3>
                <p>
                    The Command history stores the list of the commands you have
                    used in the past. This helps you to effectively re-use the
                    recent commands without having to type it all again. You can
                    navigate between the command history by pressing the{' '}
                    <code>UpArrowKey</code> or <code>DownArrowKey</code>
                    to load the previous or next command in the list.
                </p>
                <p>
                    <code>history</code>: The <code>history</code> command
                    prints the Command History discussed above. If you want to
                    re-run any command in the history, type{' '}
                    <code>!commandNumber</code>. Alternatively, you can also use
                    string matching to run the most recent match of the command{' '}
                    <code>!string</code>. You can also use the{' '}
                    <code>UpArrowKey</code>/<code>DownArrowKey</code> to
                    navigate to the stack of commands in the history.
                </p>
                <p>
                    Syntax of the above commands:
                    <CodeBlock> history </CodeBlock>
                    <CodeBlock> !507 </CodeBlock>
                    <CodeBlock> !time </CodeBlock>
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
                        [beleswar@arch ~]$ history
                        <br />
                        489 vim schedule.md
                        <br />
                        490 vim schedule.md
                        <br />
                        491 vim schedule.md
                        <br />
                        492 vim schedule.md
                        <br />
                        493 poweroff
                        <br />
                        494 directories
                        <br />
                        495 directory
                        <br />
                        496 exit
                        <br />
                        497 timedatectk <br />
                        498 timedatectl
                        <br />
                        499 clear
                        <br />
                        500 exit
                        <br />
                        501 cd /ect
                        <br />
                        502 cd /etc
                        <br />
                        503 ls
                        <br />
                        504 pwd
                        <br />
                        505 cd ..
                        <br />
                        506 cd
                        <br />
                        507 pwd
                        <br />
                        508 clear
                        <br />
                        509 history
                        <br />
                        510 this is a very very very long command for test lets
                        see what the computer outputs to the exec of this <br />
                        [beleswar@arch ~]$ <span className={blinkStyle.text} />
                    </TerminalWindow>
                </p>
                <h3>Tab Completion</h3>
                <p>
                    Tab Completion is a great feature which helps you become
                    faster by saving much keystrokes. It is an auto-completion
                    feature which attempts to complete your full
                    command/filename, if a unique match is found within the
                    initial letters. If there are multiple commands/files which
                    match the pattern, it prints all of them out and waits at
                    the command prompt again for you to type out few more
                    letters.
                    <CodeBlock>cd /etc/Net (press tab here)</CodeBlock>
                </p>
                <h3>Manual Pages</h3>
                <p>
                    {' '}
                    Manual pages give the complete description of a command. It
                    prints out the name, description, syntax, options, exit
                    status, authors etc. of a command. So if you are confused at
                    any point about the options of a command, you can check this
                    manual page to get an idea of it.
                    <br />
                    syntax: <code>man CommandName</code>
                    <CodeBlock>man ls</CodeBlock>
                </p>
                <h3>Some Keyboard Shortcuts</h3>
                <ul>
                    <li>
                        <code>ctrl</code> + <code>A</code> - jumps to the
                        beginning of the command
                    </li>
                    <li>
                        <code>ctrl</code> + <code>E</code> - jumps to the end of
                        the command
                    </li>
                    <li>
                        <code>ctrl</code> + <code>U</code> - clears the part of
                        the command which is in the left of the current position
                        of the cursor
                    </li>
                    <li>
                        <code>ctrl</code> + <code>K</code> - clears the part of
                        the command which is in the right of the current
                        position of the cursor
                    </li>
                    <li>
                        <code>ctrl</code> + <code>left arrow</code> - jumps to
                        the previous word of the command
                    </li>
                    <li>
                        <code>ctrl</code> + <code>right arrow</code> - jumps to
                        the next word of the command
                    </li>
                    <li>
                        <code>ctrl</code> + <code>shift</code> + <code>C</code>{' '}
                        - copy selected text
                    </li>
                    <li>
                        <code>ctrl</code> + <code>shift</code> + <code>V</code>{' '}
                        - paste copied text
                    </li>
                    <li>
                        <code>ctrl</code> + <code>C</code> - end running process
                    </li>
                </ul>
            </section>
            <section>
                <h2>Working with files</h2>
                <p>
                    This section talks about the commands used for file
                    management (like copying files, renaming files looking at
                    the content of files etc.). Linux is essentialy a hierarchy
                    of files. So half of your work in Linux will be based upon
                    these commands.
                </p>
                <h3>File types</h3>
                <p>
                    <ol>
                        <li>
                            <code>file</code>: The <code>file</code> command
                            scans the file and determines what kind of content
                            is in the file. The Linux environment does NOT need
                            file extensions (e.g. .md, .py, .c etc.). So, you
                            might encounter multiple files which do not have
                            extensions. Thus, this <code>file</code> command is
                            a great way to learn what kind of file we are
                            dealing with currently.
                            <br />
                            syntax: <code>file /path/to/file</code>
                            <CodeBlock>file /etc/passwd</CodeBlock>
                        </li>
                    </ol>
                </p>
                <h3>File contents</h3>
                <p>
                    <ol>
                        <li>
                            <code>cat</code>: The <code>cat</code> command is
                            the shortform for concatenate. It outputs all the
                            contents of a file to the screen. The{' '}
                            <code>cat</code> command can print the content of
                            any of the files regardless of its extension, thus
                            its super helpful when you want to see the file
                            without opening it.
                            <br />
                            syntax:{' '}
                            <code>cat /path/to/file1 /path/to/file2</code>
                            <CodeBlock>cat /etc/passwd</CodeBlock>
                        </li>
                        <li>
                            <code>less</code>: The <code>less</code> command
                            prints content of the file one page at a time. It is
                            very useful for reading long files. Use{' '}
                            <code>UpArrowKey</code>/<code>DownArrowKey</code>
                            or <code>spacebar</code> to navigate between the
                            pages, and use <code>q</code> to exit.
                            <br />
                            syntax: <code>less /path/to/file</code>
                            <CodeBlock>less /etc/passwd</CodeBlock>
                        </li>
                        <li>
                            <code>head</code>: The <code>head</code> command
                            prints the first 10 lines of the file by default.
                            This is useful when you just want to see the first
                            few lines of a file rather than reading the whole
                            long file. If you want to print specific number of
                            lines other than the first 10, use the{' '}
                            <code>-n</code> argument.
                            <br />
                            syntax: <code>head -n 3 /path/to/file</code>
                            <CodeBlock>head -n 3 /etc/passwd</CodeBlock>
                        </li>
                        <li>
                            <code>tail</code>: Similarly, the <code>tail</code>{' '}
                            command prints the last 10 lines of the file. This
                            is useful in instances like when you append some
                            records to a file, you might just want to check the
                            last 10 records of the file to verify if the
                            operation was successful.
                            <br />
                            syntax: <code>tail -n 4 /path/to/file</code>
                            <CodeBlock>tail -n 4 /etc/passwd</CodeBlock>
                        </li>
                        <li>
                            <code>wc</code>: The <code>wc</code> command stands
                            for word count, and is a very useful command which
                            counts the lines, words and characters of a file and
                            prints it to the screen.
                            <br />
                            syntax: <code>wc /path/to/file</code>
                            <CodeBlock>wc /etc/passwd</CodeBlock>
                        </li>
                    </ol>
                </p>
                <h3>File Management</h3>
                <p>
                    <ol>
                        <li>
                            <code>cp</code>: The <code>cp</code> command helps
                            to make a copy of a file from one destination to
                            another destination. It takes both the destinations
                            as arguments in the command.
                            <br />
                            syntax:{' '}
                            <code>
                                cp /path/to/source/file
                                /path/to/destination/file
                            </code>
                            <CodeBlock>cp /etc/passwd ./tempPasswd</CodeBlock>
                        </li>
                        <li>
                            <code>mv</code>: The <code>mv</code> command helps
                            to move a file from the source to the destination
                            directory. Similar to the <code>cp</code> command,
                            it takes both the destinations as arguments in the
                            command.
                            <br />
                            syntax:{' '}
                            <code>
                                mv /path/to/source/file
                                /path/to/destination/file
                            </code>
                            <CodeBlock>
                                mv ./tempPasswd ./tempDir/tempPasswd
                            </CodeBlock>
                        </li>
                        <li>
                            <code>rm</code>: The <code>rm</code> command helps
                            to delete a file or directory in the system.
                            <br />
                            syntax: <code>rm /path/to/file</code>
                            <CodeBlock>rm ./tempDir/tempPasswd</CodeBlock>
                            <CodeBlock>rm -r tempDir</CodeBlock>
                        </li>
                    </ol>
                </p>
            </section>
        </>
    );
}


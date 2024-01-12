import React,{useEffect} from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import Particle from "../../../components/Particle/Particle";
function Chapter_2() {
  return (
    <>
      {/* <Particle/> */}
      <div className="flex flex-col justify-center items-center font-space  my-5 py-5">
        <p class="max-w-5xl px-5 mt-2 text-md  leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-2xl">
          Chapter - 2
        </p>
        <div className="h-4"></div>
        <p class="max-w-5xl px-5 mt-2 text-4xl  leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Know the terminal
        </p>
      </div>
      <div className="h-5"></div>
      <div className="flex justify-center items-center z-auto bg-[]">
        <iframe
          className="sm:h-[580px] sm:w-[1240px] outline-none"
          src="https://www.youtube.com/embed/IE1LKumWW7A?si=GJGWJIABLQggi7Ri"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="sm:h-20"></div>

      <div class="p-8">
        <div class="bg-[#16161A] p-4 rounded-lg shadow-xl py-8 mt-12">
          <h4 class="text-4xl font-thin font-space text-white tracking-widest uppercase text-center">
            Knowledge Center
          </h4>
          {/* <p class="text-center text-white font-space text-sm mt-2"></p> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            <div class="flex flex-row space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  1. What is the terminal?
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  History Back in the olden days, when computers took up half a
                  room and costed more than a car, it wasn't possible for
                  everyone to have a separate machine. This was a problem as a
                  lot of computers used to be located in universities where many
                  people might want access. So, devices called 'terminals' were
                  used to facilitate communication between the user and the host
                  machine. They used to be CRT monitors and a keyboard which
                  would allow users to send text-based commands to the host.
                  Over time, as computers became cheap and easy to mass produce,
                  the need for physical terminals declined. However, people
                  still wanted to use the familiar terminal-host paradigm. This
                  led the creation of terminal emulators. Terminal Emulators A
                  terminal emulator is a piece of software which emulates or
                  replicates the functionality of a physical terminal in
                  software. Even now if you open a 'terminal' in your machine,
                  you are, in fact opening a terminal emulator. Shells A 'shell'
                  is exactly what it sounds like, it is a 'cover' around the
                  operating system. It allows us to use complex operating system
                  functionality by using simplified commands. There exist many
                  different kinds of shells but in the Unix world the 'Bourne
                  Shell' or 'sh' was the most prominent. Building on 'sh', the
                  'Bourne Again Shell' or bash was created. Most GNU/Linux
                  systems today use bash or some variation of it like zsh, fish,
                  etc.
                </p>
              </div>
            </div>

            <div class="flex flex-row space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-green-200 font-space">
                  2. Terminal Basics
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Now, boot up your VM/machine and open the terminal. If you
                  have a DE, try to find an icon for the terminal or simply
                  press ctrl + alt + t or super/windows + t. The prompt This is
                  the terminal prompt. The part in red, sam shows the current
                  user. The part in yellow, pop-hp-2020 shows the name of the
                  machine. The part in green, ~ shows the current working
                  directory. This is the folder that is currently open in the
                  current terminal session. After that, you see a $ sign which
                  signifies you are not the root user (we will come that in
                  another session, but think of it as an admin account).
                  Finally, you can see an inviting cursor, blinking happily to
                  show that the shell is ready to accept commands. Terminal
                  Commands All of the communication you do with the shell is
                  done through commands. Below, you can see an example of a
                  command, pay close attention to the syntax. The command is ls
                  or 'list'. It is used to list the contents of the currently
                  open folder. To execute a command, we simply write the name
                  along with any required arguments, flags or switches. The
                  arguments a command takes are the most important values
                  essential to functionality, in the above command ~/Documents
                  is the argument. It tells the ls command to show the contents
                  of the '~' or the home folder. A flag is a short, usually
                  optional argument which modifies the output, here -l tells the
                  command to show the output in a 'long' format. Flags are
                  usually a single-letter preceeded by a -. A switch is like a
                  flag but is usually a whole word (or mulitple words). Here,
                  --block-size tells the ls that we are giving it a size to show
                  file sizes in, the argument K for the switch tells it the
                  format. For those who are curious, the output of the above
                  command is given below
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <h2>Terminal Basics</h2>
        <p>
          In this section, we will learn about some terminal commands which will
          help us to move around the filesystem, check the command history and
          do some basic chores.
        </p>
        <h3>Moving Around</h3>
        <ol>
          <li>
            <code>cd</code>: The <code>cd</code> command stands for change
            directory and it helps to navigate into different directories
            according to their path. By default, when you open the terminal,
            your working directory is set to the home directory. Thus, you can
            use the <code>cd</code> command to change to sub-directories etc.
            <br />
            syntax : <code>cd /path/to/directory</code>
            <br />
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}cd /etc/NetworkManager{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>pwd</code>: The <code>pwd</code> command stands for print
            working directory and it outputs the current directory you are
            working upon. This is helpful when you are working with many nested
            directories, as it will give you the absolute path of the current
            directory. You can then copy the output of this command and use it
            with the <code>cd</code> command to get into the dircetory.
            <br />
            syntax: <code>pwd</code>
            <br />
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}pwd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>ls</code>: The <code>ls</code> command lists the
            files/sub-directories present in the current working directory. This
            command is often coupled with the <code>cd</code> and{" "}
            <code>pwd</code> command to effectively navigate into directories.
            <br />
            syntax: <code>ls</code>
            <br />
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}ls{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>mkdir</code>: The <code>mkdir</code> command stands for make
            directory, and it creates a directory at the specified path. You can
            then <code>cd</code> into the created directory and create some
            files there.
            <br />
            syntax: <code>mkdir directory-name</code>
            <br />
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}mkdir temporaryDirectory{/*</CodeBlock>*/}
            </div>
          </li>
        </ol>
        <h3>Command History</h3>
        <p>
          The Command history stores the list of the commands you have used in
          the past. This helps you to effectively re-use the recent commands
          without having to type it all again. You can navigate between the
          command history by pressing the <code>UpArrowKey</code> or{" "}
          <code>DownArrowKey</code>
          to load the previous or next command in the list.
        </p>
        <p>
          <code>history</code>: The <code>history</code> command prints the
          Command History discussed above. If you want to re-run any command in
          the history, type <code>!commandNumber</code>. Alternatively, you can
          also use string matching to run the most recent match of the command{" "}
          <code>!string</code>. You can also use the <code>UpArrowKey</code>/
          <code>DownArrowKey</code> to navigate to the stack of commands in the
          history.
        </p>
        <p>Syntax of the above commands:</p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/} history {/*</CodeBlock>*/}
        </div>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/} !507 {/*</CodeBlock>*/}
        </div>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/} !time {/*</CodeBlock>*/}
        </div>

        <p>
          For those who are curious, the output of the above command is given
          below
        </p>

        <h3>Tab Completion</h3>
        <p>
          Tab Completion is a great feature which helps you become faster by
          saving much keystrokes. It is an auto-completion feature which
          attempts to complete your full command/filename, if a unique match is
          found within the initial letters. If there are multiple commands/files
          which match the pattern, it prints all of them out and waits at the
          command prompt again for you to type out few more letters.
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/}cd /etc/Net (press tab here){/*</CodeBlock>*/}
        </div>

        <h3>Manual Pages</h3>
        <p>
          {" "}
          Manual pages give the complete description of a command. It prints out
          the name, description, syntax, options, exit status, authors etc. of a
          command. So if you are confused at any point about the options of a
          command, you can check this manual page to get an idea of it.
          <br />
          syntax: <code>man CommandName</code>
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/}man ls{/*</CodeBlock>*/}
        </div>

        <h3>Some Keyboard Shortcuts</h3>
        <ul>
          <li>
            <code>ctrl</code> + <code>A</code> - jumps to the beginning of the
            command
          </li>
          <li>
            <code>ctrl</code> + <code>E</code> - jumps to the end of the command
          </li>
          <li>
            <code>ctrl</code> + <code>U</code> - clears the part of the command
            which is in the left of the current position of the cursor
          </li>
          <li>
            <code>ctrl</code> + <code>K</code> - clears the part of the command
            which is in the right of the current position of the cursor
          </li>
          <li>
            <code>ctrl</code> + <code>left arrow</code> - jumps to the previous
            word of the command
          </li>
          <li>
            <code>ctrl</code> + <code>right arrow</code> - jumps to the next
            word of the command
          </li>
          <li>
            <code>ctrl</code> + <code>shift</code> + <code>C</code> - copy
            selected text
          </li>
          <li>
            <code>ctrl</code> + <code>shift</code> + <code>V</code> - paste
            copied text
          </li>
          <li>
            <code>ctrl</code> + <code>C</code> - end running process
          </li>
        </ul>
      </section>
      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <h2>Working with files</h2>
        <p>
          This section talks about the commands used for file management (like
          copying files, renaming files looking at the content of files etc.).
          Linux is essentialy a hierarchy of files. So half of your work in
          Linux will be based upon these commands.
        </p>
        <h3>File types</h3>
        <p>
          <code>file</code>: The <code>file</code> command scans the file and
          determines what kind of content is in the file. The Linux environment
          does NOT need file extensions (e.g. .md, .py, .c etc.). So, you might
          encounter multiple files which do not have extensions. Thus, this{" "}
          <code>file</code> command is a great way to learn what kind of file we
          are dealing with currently.
          <br />
          syntax: <code>file /path/to/file</code>
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock theme={dracula}>*/}file /etc/passwd{/*</CodeBlock>*/}
        </div>

        <h3>File contents</h3>
        <ol>
          <li>
            <code>cat</code>: The <code>cat</code> command is the shortform for
            concatenate. It outputs all the contents of a file to the screen.
            The <code>cat</code> command can print the content of any of the
            files regardless of its extension, thus its super helpful when you
            want to see the file without opening it.
            <br />
            syntax: <code>cat /path/to/file1 /path/to/file2</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}cat /etc/passwd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>less</code>: The <code>less</code> command prints content of
            the file one page at a time. It is very useful for reading long
            files. Use <code>UpArrowKey</code>/<code>DownArrowKey</code>
            or <code>spacebar</code> to navigate between the pages, and use{" "}
            <code>q</code> to exit.
            <br />
            syntax: <code>less /path/to/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}less /etc/passwd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>head</code>: The <code>head</code> command prints the first 10
            lines of the file by default. This is useful when you just want to
            see the first few lines of a file rather than reading the whole long
            file. If you want to print specific number of lines other than the
            first 10, use the <code>-n</code> argument.
            <br />
            syntax: <code>head -n 3 /path/to/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}head -n 3 /etc/passwd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>tail</code>: Similarly, the <code>tail</code> command prints
            the last 10 lines of the file. This is useful in instances like when
            you append some records to a file, you might just want to check the
            last 10 records of the file to verify if the operation was
            successful.
            <br />
            syntax: <code>tail -n 4 /path/to/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}tail -n 4 /etc/passwd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>wc</code>: The <code>wc</code> command stands for word count,
            and is a very useful command which counts the lines, words and
            characters of a file and prints it to the screen.
            <br />
            syntax: <code>wc /path/to/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}wc /etc/passwd{/*</CodeBlock>*/}
            </div>
          </li>
        </ol>
        <h3>File Management</h3>
        <ol>
          <li>
            <code>cp</code>: The <code>cp</code> command helps to make a copy of
            a file from one destination to another destination. It takes both
            the destinations as arguments in the command.
            <br />
            syntax:{" "}
            <code>cp /path/to/source/file /path/to/destination/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}cp /etc/passwd ./tempPasswd{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>mv</code>: The <code>mv</code> command helps to move a file
            from the source to the destination directory. Similar to the{" "}
            <code>cp</code> command, it takes both the destinations as arguments
            in the command.
            <br />
            syntax:{" "}
            <code>mv /path/to/source/file /path/to/destination/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}
                mv ./tempPasswd ./tempDir/tempPasswd
              {/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>rm</code>: The <code>rm</code> command helps to delete a file
            or directory in the system.
            <br />
            syntax: <code>rm /path/to/file</code>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}rm ./tempDir/tempPasswd{/*</CodeBlock>*/}
            </div>
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock theme={dracula}>*/}rm -r tempDir{/*</CodeBlock>*/}
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Chapter_2;

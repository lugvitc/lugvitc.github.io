import CodeBlock from '../../components/codeBlock/codeBlock';

export default function Session5() {
    return (
        <>
            <section>
                <h2>Terminal Utilities</h2>
                <p>
                    Terminal Utilities are some miscellaneous commands and
                    programs that help in carrying out some day-to-day tasks
                    which you might encounter in using Linux. It saves much effort by performing those command line operations fast.
                </p>
                <h3> Path Expansion </h3>

                <table style={{ marginBlock: '1em' }}>
                    <thead>
                        <tr>
                            <th>Pattern</th>
                            <th>
                                <code>Matches</code>
                            </th>
                            <th>
                                <code>Syntax</code>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>*</td>
                            <td>
                                Any string of zero or more characters
                            </td>
                            <td><CodeBlock>ls mov*</CodeBlock></td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>
                                Any single character
                            </td>
                            <td>
                                <CodeBlock>ls movi?</CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>[abc]</td>
                            <td>
                                Any character in the enclosed class
                            </td>
                            <td>
                                <CodeBlock>
                                    ls [abcmo]*
                                </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>![abc]</td>
                            <td>
                                Any character not in the enclosed class
                            </td>
                            <td>
                                <CodeBlock>
                                    ls [!abcmo]*
                                </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>[[:alpha:]]</td>
                            <td>
                                Any alphabetic character
                            </td>
                            <td>
                                <CodeBlock> ls [[:alpha:]] </CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>[[:alnum:]]</td>
                            <td>
                                Any alphabetic character or digit
                            </td>
                            <td>
                                <CodeBlock>ls [[:alnum:]]</CodeBlock>
                            </td>
                        </tr>
                        <tr>
                            <td>[[:digit:]]</td>
                            <td>
                                Any single digit from 0 to 9
                            </td>
                            <td>
                                <CodeBlock>ls [[:digit:]]</CodeBlock>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3> Brace Expansion </h3>
                The Brace expansion is used to create multiple files having a common pattern easily. Typically a comma-separated-values are enclosed in the pair of braces which have the common pattern to create multiple files.
                <CodeBlock> echo {'{'}Monday, Tuesday, Wednesday{'}'}.txt </CodeBlock>
                <CodeBlock> touch file{'{'}1..11{'}'}.txt </CodeBlock>

                <h3> Variable Expansion </h3>
                Through variable expansion, you can store the output of a command to a variable, so that you can use it at mulitple places without actually having to retype the command again and again. It{"'"}s just like how you use variables in coding programs.
                <CodeBlock> myDirectory=value </CodeBlock>
                <CodeBlock> cd $myDirectory </CodeBlock>

                <h3> grep </h3>
                The grep command filters the output of a command and shows only the lines/text which matches the pattern you provide as an arguement.
                <CodeBlock> ls -l | grep movie </CodeBlock>

                <h3> zip </h3>
                The zip command helps to zip/archive a directory directly from the command line interface.
                <CodeBlock> zip (zip_file_name) (myDirectory) </CodeBlock>

                <h3> unzip </h3>
                The unzip command helps to unzip an archive from the command line interface.
                <CodeBlock> unzip (zip_file_name) -d (/path/to/unzip) </CodeBlock>
            </section>
            <section>
                <h2>vim: A terminal-based text editor</h2>
                <p><em>vim</em> is a simple text editor operated entirely in the terminal. It is a an improved version of an earlier editor called <em>vi</em> (vim stands for <em>vi improved</em>).</p>
                <p>With vim, you can essentially replace your mouse with the keyboard. This enables you to increase your speed while editing documents as your hand doesn't leave the keyboard.</p>

                <h3>Installing vim</h3>
                <p>vim is available on the official repositories for most distros. So, you can simply use the default package manager:</p>
                <ol>
                    <li><code>apt</code>: <CodeBlock>sudo apt install vim</CodeBlock></li>
                    <li><code>pacman</code>: <CodeBlock>sudo pacman -S vim</CodeBlock></li>
                    <li><code>dnf</code>: <CodeBlock>sudo dnf install vim-enhanced</CodeBlock></li>
                </ol>
                <p>After installation, type the command below to verify that vim has been installed. If you see an output stating the version, you're all set.</p>
                <CodeBlock>vim --version</CodeBlock>

                <h3>Modes</h3>
                <p>To be able to effectively replace all the funcionality a mouse provides and still let you be able to type, vim has certain 'modes'. They are:</p>
                <ol>
                    <li>
                        Normal mode: Used for moving around, entering commands and switching to other modes. You can enter other modes only from normal mode. In normal mode, you can give certain commands after typing the <code>:</code> (<code>shift</code> + <code>;</code>) key.
                    </li>
                    <li>Insert mode: Used to actually type text.</li>
                    <li>Visual mode: Used to select text.</li>
                </ol>

                <h3>Opening a file</h3>
                <p>Now, to open a file type the command:</p>
                <CodeBlock>vim filename</CodeBlock>
                <p>You can also open an new, empty, untitled file by just typing <code>vim</code></p>

                <h3>Changing Modes and Giving Commands</h3>
                <p>
                    The current modes can be seen at the bottom of the screen (the terminal window). If you see nothing, you're in the normal mode. Now, press <code>i</code> or {' '}
                    <code>a</code> to enter the Insert Mode. You should see the text <code>--INSERT--</code> at the bottom left. Exit Insert Mode by pressing <code>esc</code>, you should now be back in Normal Mode.
                </p>
                <p>
                    To enter Visual mode, press <code>v</code>. You can exit this mode by pressing <code>esc</code>.
                </p>
                <p>To give commands, make sure you're in Normal mode and then press the <code>:</code> key. If you can see a <code>:</code> with a blinking cursor after it, that means you can type your command.</p>

                <h3>Vim cheat sheet</h3>
                <p>Below is a cheat-sheet of the most basic key combinations, commands, etc. in vim. Remember, these commands are used in Normal mode.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>Keys to Press</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>Saving and quitting</td>
                            <td>:q!</td>
                            <td>Quit vim and discard changes</td>
                        </tr>
                        <tr>
                            <td>:w</td>
                            <td>Save the file</td>
                        </tr>
                        <tr>
                            <td>:qw</td>
                            <td>Save the file and quit vim</td>
                        </tr>
                        <tr>
                            <td>:saveas filename</td>
                            <td>Save a copy with the given name</td>
                        </tr>
                        <tr>
                            <td rowSpan={19}>Moving Around</td>
                            <td>j</td>
                            <td>Go one line down</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>Go one line up</td>
                        </tr>
                        <tr>
                            <td>l</td>
                            <td>Go one character to the right</td>
                        </tr>
                        <tr>
                            <td>h</td>
                            <td>Go one character to the left</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>Go to the first character of the line</td>
                        </tr>
                        <tr>
                            <td>$</td>
                            <td>Go to the last character of the line</td>
                        </tr>
                        <tr>
                            <td>^</td>
                            <td>Go to the first non-whitespace character of the line</td>
                        </tr>
                        <tr>
                            <td>w</td>
                            <td>Go one word forward</td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>Go one word backward</td>
                        </tr>
                        <tr>
                            <td>e</td>
                            <td>Go to the end of the next word</td>
                        </tr>
                        <tr>
                            <td>{')'}</td>
                            <td>Go one sentence forward</td>
                        </tr>
                        <tr>
                            <td>{'('}</td>
                            <td>Go one sentence backward</td>
                        </tr>
                        <tr>
                            <td>{'}'}</td>
                            <td>Go one paragraph forward</td>
                        </tr>
                        <tr>
                            <td>{'{'}</td>
                            <td>Go one paragraph backward</td>
                        </tr>
                        <tr>
                            <td>H</td>
                            <td>Go to the top of the screen</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>Go to the bottom of the screen</td>
                        </tr>
                        <tr>
                            <td>gg</td>
                            <td>Go to the top of the file</td>
                        </tr>
                        <tr>
                            <td>G</td>
                            <td>Go to the bottom of the file</td>
                        </tr>
                        <tr>
                            <td>:n</td>
                            <td>Go to line number n</td>
                        </tr>
                        <tr>
                            <td rowSpan={9}>Editing Text</td>
                            <td>i</td>
                            <td>Enter Insert mode with the cursor at the current position</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>Enter Insert mode with the cursor one position after</td>
                        </tr>
                        <tr>
                            <td>x</td>
                            <td>delete the current character</td>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td>delete the previous character</td>
                        </tr>
                        <tr>
                            <td>dw</td>
                            <td>delete(cut) the word the cursor is at</td>
                        </tr>
                        <tr>
                            <td>dd</td>
                            <td>delete(cut) the whole line</td>
                        </tr>
                        <tr>
                            <td>yy</td>
                            <td>copy the whole line</td>
                        </tr>
                        <tr>
                            <td>p</td>
                            <td>paste selection after the cursor</td>
                        </tr>
                        <tr>
                            <td>P</td>
                            <td>paste selection before the cursor</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Selection</td>
                            <td>v</td>
                            <td>Enter visual mode to select text</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td>Enter visual mode with line selection</td>
                        </tr>
                        <tr>
                            <td>j, h, k, l, 0, $, ^, w, b, e, {'('}, {')'}, {'}'}, {'{'}, etc</td>
                            <td>The keys use to move around in normal mode are used for selection in visual mode</td>
                        </tr>
                        <tr>
                            <td>y</td>
                            <td>Copy selection (will exit visual mode)</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>Undo/redo</td>
                            <td>u</td>
                            <td>Undo</td>
                        </tr>
                        <tr>
                            <td>ctrl + r</td>
                            <td>redo</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Searching and Replacing Text</td>
                            <td>/xyz</td>
                            <td>Search for (and highlight) every occurrence of 'xyz' in the file</td>
                        </tr>
                        <tr>
                            <td>:noh</td>
                            <td>Remove all selections (and highlights)</td>
                        </tr>
                        <tr>
                            <td>:s /xyz/abc</td>
                            <td>Replace 'xyz' with 'abc' in the current line (1st occurence only)</td>
                        </tr>
                        <tr>
                            <td>:%s /xyz/abc</td>
                            <td>Replace every occurrence of 'xyz' with 'abc'</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}


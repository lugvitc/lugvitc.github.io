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
                                <th><code>Matches</code></th>
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
                <h3>Modes</h3>
                <h3>Commands</h3>
                <h3>Working with Files</h3>
                <h3>Moving Around</h3>
                <h3>Editing Text</h3>
                <h3>Selecting text</h3>
                <h3>Cutting, Copying, Pasting</h3>
                <h3>Finding and Replacing Text</h3>
                <h3>Files in multiple tabs</h3>
            </section>
        </>
    );
}


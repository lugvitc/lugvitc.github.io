import CodeBlock from '../../components/codeBlock/codeBlock';
import LugLink from '../../components/lugLink/lugLink';
export default function Session6() {
    return (
        <>
            <section>
                <h2>Vim Customization</h2>
                <p>
                    If you are writing your first code in vim, you must feel
                    odd regarding where the line numbers are, or where the
                    current filename is. The default version of vim does not
                    show these details. But, you can customize vim to include
                    additional details according to your usage. All of the
                    customization will be saved in the <code>~/.vimrc</code>
                    {' '}file. Vim always looks for this configuration file in the
                    home directory before opening any file. So, it is necessary
                    that you save this configuration file in the home directory.
                </p>

                <p>
                    Steps to apply some customization in vim editor:
                    <ol>
                        <li> <code>vim ~/.vimrc</code> to create and open the the config file in home directory. </li>
                        <li> Begin a line with <code>{'"'}</code>{" "} to add a comment describing the config. </li>
                        <li> In the next line, set the configuration option. </li>
                        <li> Repeat step 2 and 3 for every set of option you configure. </li>
                        <li> Save and close the config file. </li>
                        <li> You can see the whole list of configuration options for vim, by opening any file in vim and entering the command mode and then typing <code>:options</code> </li>
                    </ol>
                </p>

                <p>
                    Consider the example where you want vim to show the line numbers against the file content everytime you open a file.
                    For that, first search the options list to find the command which sets the line numbers. You will see it{"'"}s the
                    {' '}<code>set number</code> command which does that. So, add the following lines to your <code>~/.vimrc</code> file for
                    the configuration.
                    <CodeBlock> {'"'} Show line numbers always <br /> set number
                    </CodeBlock>
                    Similarly, you can configure other options by referring this guide from <LugLink link="https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/"> freecodecamp</LugLink>.
                </p>
            </section>

            <section>
                <h2> Vim Plugins </h2>
                <p>
                    A plugin is a way to extend Vim{"'"}s functionality. As discussed in customization, you can make vim more suitable for your usage by adding more commands. But you can not
                    do everything with vim commands. For using advanced features, you have to use plugins. So, plugins are basically software code written for vim, which instructs vim to perform some advanced operations on your behalf. For example, the auto-pairs plugin in vim auto-completes the other end of open elements such as <code>{'('}, {'['}, {'{'}, {'"'}, {"'"}</code> etc. for you.
                </p>

                <p>
                    Steps to install a plugin in vim editor: <br />
                    <ol>
                        <li> Install the vim plugin manager: <code>vim-plug</code>. A plugin manager helps you to install/upgrade/delete multiple plugins easily, just like a package manager installs software in linux system. Run the following command to install vim-plug in your linux system: <CodeBlock>curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
                            https:{'//'}raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim</CodeBlock></li>
                        <li> Create a config file for the plugin manager with the name: <code>~/.vimrc.plug</code>. In this file, we are going to include the list of all the plugins we want to install in vim. You can find all the plugins for vim in a GitHub search; just sign-in to GitHub, and search <code>vim plugins</code>. So, let{"'"}s say we want to install the plugins <code>preservim/nerdtree</code> and <code>jiangmiao/auto-pairs</code>. Let{"'"}s write and save the <code>~/.vimrc.plug</code> file like below:
                            <CodeBlock> call plug#begin('~/.vim.plugged') <br />
                                <br />
                                {'"'} List all your plugins here down <br />
                                Plug 'preservim/nerdtree' <br />
                                Plug 'jiangmiao/auto-pairs' <br />
                                <br />
                                call plug#end()
                            </CodeBlock> </li>
                        <li> Open the <code>~/.vimrc</code> file again, we will make a call to the <code>~/.vimrc.plug</code> file from the <code>~/.vimrc</code> file. Vim always opens the <code>~/.vimrc</code> config file before editing any text file. Thus, we are essentially making a call to the plugin config file from the main vim config file, so that vim can deal with the plugins now. Let{"'"}s append the following lines to the <code>~/.vimrc</code> file and save it for making the call:
                            <CodeBlock> {'"'} we want to call our plugin configuration from this file <br />
                                source ~/.vimrc.plug <br />
                            </CodeBlock>
                        </li>
                        <li> Now, open up any file with vim. Then enter the command mode in vim and type <code>:PlugInstall</code> to install all the plugins listed in the <code>~/.vimrc.plug</code> file. It should run successfully and now you have all the plugins installed in your file. Done...
                        </li>
                    </ol>
                </p>

                Side Notes: <br />
                <ul>
                    <li> To update all your plugins, open any file with vim and enter the command mode and type <code>:PlugUpdate</code> to update your list of plugins. </li>
                    <li> To upgrade your plugin manager <code>vim-plug</code>, open any file with vim and enter the command mode and type <code>:PlugUpgrade</code> to update your plugin manager. </li>
                    <li> To uninstall a plugin, open the <code>~/.vimrc.plug</code> file and remove the respective plugin line you wish to uninstall. Then save the file and quit. Open any file in vim now and enter the command mode and type <code>:PlugClean</code> to uninstall the plugins you wished to remove. Type <code>y</code> if asked to remove directories.</li>
                </ul>



            </section>
        </>
    );
}


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
                    Steps to apply some customization in vim editor:</p>
                <ol>
                    <li> <code>vim ~/.vimrc</code> to create and open the the config file in home directory. </li>
                    <li> Begin a line with <code>{'"'}</code>{" "} to add a comment describing the config. </li>
                    <li> In the next line, set the configuration option. </li>
                    <li> Repeat step 2 and 3 for every set of option you configure. </li>
                    <li> Save and close the config file. </li>
                    <li> You can see the whole list of configuration options for vim, by opening any file in vim and entering the command mode and then typing <code>:options</code> </li>
                </ol>


                <p>
                    Consider the example where you want vim to show the line numbers against the file content everytime you open a file.
                    For that, first search the options list to find the command which sets the line numbers. You will see it{"'"}s the
                    {' '}<code>set number</code> command which does that. So, add the following lines to your <code>~/.vimrc</code> file for
                    the configuration.
                </p>
                <CodeBlock> {'"'} Show line numbers always <br /> set number
                </CodeBlock>
                <p> Similarly, you can configure other options by referring this guide from <LugLink link="https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/"> freecodecamp</LugLink>.
                </p>
            </section>

            <section>
                <h2> Vim Plugins </h2>
                <p>
                    A plugin is a way to extend Vim{"'"}s functionality. As discussed in customization, you can make vim more suitable for your usage by adding more commands. But you can not
                    do everything with vim commands. For using advanced features, you have to use plugins. So, plugins are basically software code written for vim, which instructs vim to perform some advanced operations on your behalf. For example, the auto-pairs plugin in vim auto-completes the other end of open elements such as <code>{'('}, {'['}, {'{'}, {'"'}, {"'"}</code> etc. for you.
                </p>

                <p>
                    Steps to install a plugin in vim editor:</p>
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


                Side Notes: <br />
                <ul>
                    <li> To update all your plugins, open any file with vim and enter the command mode and type <code>:PlugUpdate</code> to update your list of plugins. </li>
                    <li> To upgrade your plugin manager <code>vim-plug</code>, open any file with vim and enter the command mode and type <code>:PlugUpgrade</code> to update your plugin manager. </li>
                    <li> To uninstall a plugin, open the <code>~/.vimrc.plug</code> file and remove the respective plugin line you wish to uninstall. Then save the file and quit. Open any file in vim now and enter the command mode and type <code>:PlugClean</code> to uninstall the plugins you wished to remove. Type <code>y</code> if asked to remove directories.</li>
                </ul>
            </section>

            <section>
                <h2>Customizing GNOME</h2>
                <p>Customization is one of the most appealing aspects of linux. Below, you can find some information on how to customize the GNOME desktop enviroment.</p>

                <h3>Theming</h3>
                <h4>Gnome Tweaks</h4>
                <p>
                    Gnome tweaks are a set of extra settings for gnome (which honestly should be a part of gnome by default). After installing the application, you can make a lot of{' '}
                    customizations like changing the theme, the set of icons used, the cursor, etc.
                </p>
                <p>Gnome Tweaks should be in the official repositories and you can download it using:</p>
                <ol>
                    <li><code>apt</code>: <CodeBlock>sudo apt install gnome-tweaks</CodeBlock></li>
                    <li><code>pacman</code>: <CodeBlock>sudo pacman -S gnome-tweaks</CodeBlock></li>
                    <li><code>dnf</code>: <CodeBlock>sudo dnf install gnome-tweaks</CodeBlock></li>
                </ol>
                <p>Now, searching for the gnome tweaks app or typing <code>gnome-tweaks</code> in the terminal will open the app.</p>

                <h4>Custom Icons/Cursors</h4>
                <p>Go to <LugLink link='https://www.gnome-look.org/browse/'>gnome-look.org</LugLink> and find an icon pack you like. Download it and extract the tarball by typing:</p>
                <CodeBlock>tar -xvf name.tar.gz</CodeBlock>
                <p>Now, move this file to the icons folder:</p>
                <CodeBlock>
                    sudo mv name /usr/share/icons
                </CodeBlock>
                <p>
                    Now, open the gnome-tweaks app (or restart if it was already open) and go to the 'Appearance' tab and select the icon pack you just added in the 'Icons' drop down menu.
                </p>
                <p>NOTE: any custom cursors you download also go in the same folder.</p>

                <h4>Shell themes</h4>
                <p>Download a theme from the same site and put in <code>/usr/share/themes</code> using:</p>
                <CodeBlock>
                    sudo mv name /usr/share/themes
                </CodeBlock>
                <p>Go to the gnome tweaks app and change the theme</p>

                <h4>Shell themes and Gnome 42</h4>
                <p>NOTE: Written on 20220724</p>
                <p>If you see a 'Legacy Applications' option, that means you are in GNOME 42 (or higher, idk). For a whole lot of reasons, I would suggest you to not change the theme. Not all apps will look the same and there will be a lot of inconsistencies.</p>

                <h3>Extensions</h3>
                <h4>What are Extensions</h4>
                <p>Extensions are extra software which increase the functionality of gnome. They are very powerful and may break the system, so proceed on you own risk and make sure you trust the extension.</p>

                <h4>Downloading Extensions</h4>
                <p>Frst, get the gnome shell browser extension for your preferred browser. Then go to <LugLink link='https://extensions.gnome.org/'>extensions.gnome.org</LugLink> to install any extensions you like.</p>
                <p>Install the 'Extensions Mangaer' app to easily view your extensions. </p>

                <h4>Some Recommended Extensions</h4>
                <p>Here are some of the extensions I use:</p>
                <ul>
                    <li>Dash to panel: Not a fan of the dock and top-bar paradigm in GNOME, me neither. Dash to panel bring a familiar Windows-like taskbar at the bottom of the screen. It is VERY VERY customizable, so you can fine tune it as much as you want.</li>
                    <li>Arc menu: Get a start-menu like arc-menu, where you can search for apps and even pin apps!</li>
                    <li>Vitals: Shows you basic stats about your system (like the amount of free memory, the network speed, etc.) on the top-bar (or the panel)</li>
                    <li>Lock keys: Shows you which (num lock or caps lock) lock keys are currently active.</li>
                </ul>
            </section>
        </>
    );
}


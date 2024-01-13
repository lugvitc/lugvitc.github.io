import React,{useEffect} from "react";

import Particle from "../../../components/Particle/Particle";
function Chapter_6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      {/* <Particle/> */}
      <div className="flex flex-col justify-center items-center font-space  my-5 py-5">
        <p class="max-w-5xl px-5 mt-2 text-md  leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-2xl">
          Chapter - 6
        </p>
        <div className="h-4"></div>
        <p class="max-w-5xl px-5 mt-2 text-4xl  leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Desktop Customization
        </p>
      </div>
      <div className="h-5"></div>
      <div className="flex justify-center items-center z-auto bg-[]">
        <iframe
          className="sm:h-[580px] sm:w-[1240px] outline-none"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QFWTdmm2RG8?si=k0TnWZ7BXuxMCZIF"
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
                  1.Vim Customization
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  If you are writing your first code in vim, you must feel odd
                  regarding where the line numbers are, or where the current
                  filename is. The default version of vim does not show these
                  details. But, you can customize vim to include additional
                  details according to your usage. All of the customization will
                  be saved in the ~/.vimrc file. Vim always looks for this
                  configuration file in the home directory before opening any
                  file. So, it is necessary that you save this configuration
                  file in the home directory.
                  <br />
                  Steps to apply some customization in vim editor:
                  <br />
                  vim ~/.vimrc to create and open the the config file in home
                  directory.
                  <br />
                  Begin a line with " to add a comment describing the config.
                  <br />
                  In the next line, set the configuration option.
                  <br />
                  Repeat step 2 and 3 for every set of option you configure.
                  <br />
                  Save and close the config file.
                  <br />
                  You can see the whole list of configuration options for vim,
                  by opening any file in vim and entering the command mode and
                  then typing :options
                  <br />
                  Consider the example where you want vim to show the line
                  numbers against the file content everytime you open a file.
                  For that, first search the options list to find the command
                  which sets the line numbers. You will see it's the set number
                  command which does that. So, add the following lines to your
                  ~/.vimrc file for the configuration. <br />
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
                  2. Vim Plugins
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  A plugin is a way to extend Vim's functionality. As discussed
                  in customization, you can make vim more suitable for your
                  usage by adding more commands. But you can not do everything
                  with vim commands. For using advanced features, you have to
                  use plugins. So, plugins are basically software code written
                  for vim, which instructs vim to perform some advanced
                  operations on your behalf. For example, the auto-pairs plugin
                  in vim auto-completes the other end of open elements for you.
                  <br />
                  Steps to install a plugin in vim editor:
                  <br />
                  Install the vim plugin manager: vim-plug. A plugin manager
                  helps you to install/upgrade/delete multiple plugins easily,
                  just like a package manager installs software in linux system.
                  Run the following command to install vim-plug in your linux
                  system:
                  <br />
                  <div className="text-blue-300">
                    curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
                    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <p>Steps to install a plugin in vim editor:</p>
        <ol>
          <li>
            {" "}
            Install the vim plugin manager: <code>vim-plug</code>. A plugin
            manager helps you to install/upgrade/delete multiple plugins easily,
            just like a package manager installs software in linux system. Run
            the following command to install vim-plug in your linux system:{" "}
            <div className="  text-blue-300">
              {/*<CodeBlock>*/}
              curl -fLo ~/.vim/autoload/plug.vim --create-dirs \ https:{"//"}
              raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
              {/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            {" "}
            Create a config file for the plugin manager with the name:{" "}
            <code>~/.vimrc.plug</code>. In this file, we are going to include
            the list of all the plugins we want to install in vim. You can find
            all the plugins for vim in a GitHub search; just sign-in to GitHub,
            and search <code>vim plugins</code>. So, let{"'"}s say we want to
            install the plugins <code>preservim/nerdtree</code> and{" "}
            <code>jiangmiao/auto-pairs</code>. Let{"'"}s write and save the{" "}
            <code>~/.vimrc.plug</code> file like below:
            <div className="  text-blue-300">
              {/*<CodeBlock>*/} call plug#begin('~/.vim.plugged') <br />
              <br />
              {'"'} List all your plugins here down <br />
              Plug 'preservim/nerdtree' <br />
              Plug 'jiangmiao/auto-pairs' <br />
              <br />
              call plug#end()
              {/*</CodeBlock>*/}
            </div>{" "}
          </li>
          <li>
            {" "}
            Open the <code>~/.vimrc</code> file again, we will make a call to
            the <code>~/.vimrc.plug</code> file from the <code>~/.vimrc</code>{" "}
            file. Vim always opens the <code>~/.vimrc</code> config file before
            editing any text file. Thus, we are essentially making a call to the
            plugin config file from the main vim config file, so that vim can
            deal with the plugins now. Let{"'"}s append the following lines to
            the <code>~/.vimrc</code> file and save it for making the call:
            <div className="  text-blue-300">
              {/*<CodeBlock>*/} {'"'} we want to call our plugin configuration
              from this file <br />
              source ~/.vimrc.plug <br />
              {/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            {" "}
            Now, open up any file with vim. Then enter the command mode in vim
            and type <code>:PlugInstall</code> to install all the plugins listed
            in the <code>~/.vimrc.plug</code> file. It should run successfully
            and now you have all the plugins installed in your file. Done...
          </li>
        </ol>
        Side Notes: <br />
        <ul>
          <li>
            {" "}
            To update all your plugins, open any file with vim and enter the
            command mode and type <code>:PlugUpdate</code> to update your list
            of plugins.{" "}
          </li>
          <li>
            {" "}
            To upgrade your plugin manager <code>vim-plug</code>, open any file
            with vim and enter the command mode and type{" "}
            <code>:PlugUpgrade</code> to update your plugin manager.{" "}
          </li>
          <li>
            {" "}
            To uninstall a plugin, open the <code>~/.vimrc.plug</code> file and
            remove the respective plugin line you wish to uninstall. Then save
            the file and quit. Open any file in vim now and enter the command
            mode and type <code>:PlugClean</code> to uninstall the plugins you
            wished to remove. Type <code>y</code> if asked to remove
            directories.
          </li>
        </ul>
      </section>

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <h2>Customizing GNOME</h2>
        <p>
          Customization is one of the most appealing aspects of linux. Below,
          you can find some information on how to customize the GNOME desktop
          enviroment.
        </p>

        <h3>Theming</h3>
        <h4>Gnome Tweaks</h4>
        <p>
          Gnome tweaks are a set of extra settings for gnome (which honestly
          should be a part of gnome by default). After installing the
          application, you can make a lot of customizations like changing the
          theme, the set of icons used, the cursor, etc.
        </p>
        <p>
          Gnome Tweaks should be in the official repositories and you can
          download it using:
        </p>
        <ol>
          <li>
            <code>apt</code>:{" "}
            <div className="  text-blue-300">
              {/*<CodeBlock>*/}sudo apt install gnome-tweaks{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>pacman</code>:{" "}
            <div className="  text-blue-300">
              {/*<CodeBlock>*/}sudo pacman -S gnome-tweaks{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            <code>dnf</code>:{" "}
            <div className="  text-blue-300">
              {/*<CodeBlock>*/}sudo dnf install gnome-tweaks{/*</CodeBlock>*/}
            </div>
          </li>
        </ol>
        <p>
          Now, searching for the gnome tweaks app or typing{" "}
          <code>gnome-tweaks</code> in the terminal will open the app.
        </p>

        <h4>Custom Icons/Cursors</h4>
        <p>
          Go to and find an icon pack you like. Download it and extract the
          tarball by typing:
        </p>
        <div className="  text-blue-300">
          {/*<CodeBlock>*/}tar -xvf name.tar.gz{/*</CodeBlock>*/}
        </div>
        <p>Now, move this file to the icons folder:</p>
        <div className="  text-blue-300">
          {/*<CodeBlock>*/}sudo mv name /usr/share/icons{/*</CodeBlock>*/}
        </div>
        <p>
          Now, open the gnome-tweaks app (or restart if it was already open) and
          go to the 'Appearance' tab and select the icon pack you just added in
          the 'Icons' drop down menu.
        </p>
        <p>NOTE: any custom cursors you download also go in the same folder.</p>

        <h4>Shell themes</h4>
        <p>
          Download a theme from the same site and put in{" "}
          <code>/usr/share/themes</code> using:
        </p>
        <div className="  text-blue-300">
          {/*<CodeBlock>*/}sudo mv name /usr/share/themes{/*</CodeBlock>*/}
        </div>
        <p>Go to the gnome tweaks app and change the theme</p>

        <h4>Shell themes and Gnome 42</h4>
        <p>NOTE: Written on 20220724</p>
        <p>
          If you see a 'Legacy Applications' option, that means you are in GNOME
          42 (or higher, idk). For a whole lot of reasons, I would suggest you
          to not change the theme. Not all apps will look the same and there
          will be a lot of inconsistencies.
        </p>

        <h3>Extensions</h3>
        <h4>What are Extensions</h4>
        <p>
          Extensions are extra software which increase the functionality of
          gnome. They are very powerful and may break the system, so proceed on
          you own risk and make sure you trust the extension.
        </p>

        <h4>Downloading Extensions</h4>
        <p>
          Frst, get the gnome shell browser extension for your preferred
          browser. Then go to to install any extensions you like.
        </p>
        <p>
          Install the 'Extensions Mangaer' app to easily view your extensions.{" "}
        </p>

        <h4>Some Recommended Extensions</h4>
        <p>Here are some of the extensions I use:</p>
        <ul>
          <li>
            Dash to panel: Not a fan of the dock and top-bar paradigm in GNOME,
            me neither. Dash to panel bring a familiar Windows-like taskbar at
            the bottom of the screen. It is VERY VERY customizable, so you can
            fine tune it as much as you want.
          </li>
          <li>
            Arc menu: Get a start-menu like arc-menu, where you can search for
            apps and even pin apps!
          </li>
          <li>
            Vitals: Shows you basic stats about your system (like the amount of
            free memory, the network speed, etc.) on the top-bar (or the panel)
          </li>
          <li>
            Lock keys: Shows you which (num lock or caps lock) lock keys are
            currently active.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Chapter_6;

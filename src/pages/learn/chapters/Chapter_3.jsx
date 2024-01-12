import React,{useEffect} from "react";
import Particle from "../../../components/Particle/Particle";
function Chapter_3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <Particle/> */}
      <div className="flex flex-col justify-center items-center font-space  my-5 py-5">
        <p class="max-w-5xl px-5 mt-2 text-md  leading-tight text-center text-white sm:mt-10 sm:px-0 sm:text-2xl">
          Chapter - 3
        </p>
        <div className="h-4"></div>
        <p class="max-w-5xl px-5 mt-2 text-4xl  leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Know the Linux File System
        </p>
      </div>
      <div className="h-5"></div>
      <div className="flex justify-center items-center z-auto bg-[]">
        <iframe
           className="sm:h-[580px] sm:w-[1240px] outline-none"
          src="https://www.youtube.com/embed/r7zz63Xt56E?si=QDEymdHcIWp3yZXu"
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
          <div class="flex flex-row justify-center mt-4">
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
                  1. Files
                </h4>
                <p class="text-white font-space my-2 font-thin">
                  Any operating system needs to access and manipulate the files
                  stored on the disk. However, for a computer, the data for on a
                  disk is just a big blob of 1's and 0's. The OS needs to know
                  which data is in which file and how to make sense of it. To
                  solve this, data on a file is stored according to a set of
                  rules called a filesystem.
                  <br />
                  There are a lot of filesystems out there, some major ones are:
                  <br />
                  FAT (File Allocation Table): An old filesystem used by DOS and
                  Windows. Nowadays, its used in portable storage systems like
                  memory cards and pendrives. <br />
                  NTFS (New Technology File System): A propietary filesystem
                  used mainly by MS Windows. <br />
                  EXT (EXTended file system) family(ext2, ext3, ext4):
                  Filesystems used by most Linux Distributions.
                  <br />
                  Everything is a File
                  <br />
                  In Linux systems a large number of resources like I/O devices,
                  network adapters, even processes are all represented as files.
                  <br />
                  This means, programs can read from/write to these files and
                  the actual working of the hardware is abstracted. The
                  Filesystem Heirarchy Standard (FHS)
                  <br />
                  Those of you familiar with Windows would be used to files
                  being stored in different drives shown by a letter. Thus, the
                  Windows file system is separated by disk, showing its DOS
                  heritage.
                  <br />
                  Linux's Filesystem Heirarchy is quite different. It is not
                  broken by drive and is a single tree. The / directory, also
                  called the root is the root of the filesystem tree. Every file
                  in the system is stored in the / directory. Even if the files
                  are stored on separate partitions or separate disks, for the
                  OS, they appear in a single tree. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="px-4 py-20 bg-[#16161A] text-white font-space">
        <div class="flex flex-col max-w-6xl mx-auto md:flex-row">
          <h2 class="w-full mr-8 text-3xl font-space font-extrabold leading-9 md:w-1/3">
            Some more info...
          </h2>
          <dl class="w-full md:w-2/3">
            <dt class="mb-4">
              <h3 class="text-xl font-space font-semibold text-green-200">
                We have attached a few resources, which you can refer to install
                some common Linux distros through Dual Boot:
              </h3>
            </dt>
            <div class="mb-16 flex flex-col">
              <a
                className="text-blue-300"
                href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/"
              >
                Blog Post: Dual Boot Ubuntu on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/-iSAyiicyQY">
                Video tutorial: Dual Boot Ubuntu on Windows
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://www.linuxtechi.com/dual-boot-arch-linux-windows-10/"
              >
                Blog Post: Dual Boot Arch on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/L1B1O0R1IHA">
                Video tutorial: Dual Boot Arch on Windows
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://www.geeksforgeeks.org/dual-boot-kali-linux-with-windows/"
              >
                Blog Post: Dual Boot Kali Linux on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/BRk71KypnBg">
                Video tutorial: Dual Boot Kali linux on Windows
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://blnlabs.com/dual-boot-pop-os-and-windows-10/"
              >
                Blog Post: Dual Boot Pop!_OS on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/hbzCSjlbInY">
                Video tutorial: Dual Boot Pop!_OS on Windows
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://www.linuxfordevices.com/tutorials/linux/dual-boot-windows-10-and-linux-mint"
              >
                Blog Post: Dual Boot Linux Mint on Windows
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/eL1jHhLcgTU">
                Video tutorial: Dual Boot Linux Mint on Windows
              </a>
            </div>
            <dt class="mb-4">
              <h3 class="text-xl font-space font-semibold text-green-200">
                Virtual Machine
              </h3>
            </dt>
            <dd class="mb-16">
              <p>
                This is a relatively simpler method to install a linux distro in
                your system. Here, as the name suggests, you use the Linux
                distribution virtually. That is, the Linux distro runs on top of
                your current OS and this is achieved by the usage of a Virtual
                Machine Monitor (like VirtualBox or VMWare etc.). Here, you do
                not have to worry about breaking your software. Because,
                everything can be restored to its initial state easily. Thus,
                VMs are a great way to experiment and learn when you are using
                Linux for the first time. After you are well acquainted with
                using a distro virtually, you can switch to the Dual Boot option
                :D We have attached a few resources, which you can refer to
                install some common Linux distros through Virtual Machine in
                Virtual Box:
              </p>
              <br />
              <a
                className="text-blue-300"
                href="https://www.geeksforgeeks.org/how-to-install-ubuntu-on-virtualbox/"
              >
                Blog Post: Install Ubuntu VM
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/x5MhydijWmc">
                Video tutorial: Install Ubuntu VM
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://itsfoss.com/install-arch-linux-virtualbox/"
              >
                Blog Post: Install Arch VM
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/_3-OMUQTf_k">
                Video tutorial: Install Arch VM
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://itsfoss.com/install-kali-linux-virtualbox/"
              >
                Blog Post: Install Kali Linux VM
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/V_Payl5FlgQ">
                Video tutorial: Install Kali Linux VM
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://www.how2shout.com/linux/how-to-install-pop-os-in-virtualbox-virtual-machine/"
              >
                Blog Post: Install Pop!_OS VM
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/qsB0gwrwIYQ">
                Video tutorial: Install Pop!_OS VM
              </a>
              <br />
              <a
                className="text-blue-300"
                href="https://itsfoss.com/install-linux-mint-in-virtualbox/"
              >
                Blog Post: Install Linux Mint VM
              </a>
              <br />
              <a className="text-blue-300" href="https://youtu.be/aisUxv2S3gk">
                Video tutorial: Install Linux Mint VM
              </a>
              <br />
            </dd>

            <dd class="mb-16">
              <p></p>
            </dd>
          </dl>
        </div>
      </div> */}

      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <p>
          In the <code>/</code> directory, there is a (mostly) standard set of
          directories. Some important directories inside <code>/</code> are
          given below:
        </p>
        <ul>
          <li>
            <code>/bin</code>: Contains important <em>binary files</em> needed
            for every user.
          </li>
          <li>
            <code>/boot</code>: Contains the kernel, bootloaders and other
            essential files to boot the system.
          </li>
          <li>
            <code>/dev</code>: Contains <em>device files</em>. These files are
            an interface to the drivers for those devices (another example of
            everything is a file).
          </li>
          <li>
            <code>/etc</code>: Contains system-wide configuration files. So, if
            you don't know where a config file is located, its worth looking in
            this directory.
          </li>
          <li>
            <code>/home</code>: Contains the <em>home</em> directories of all
            users.
          </li>
          <li>
            <code>/lib.*</code>: Contains essential libraries used by the binary
            files stored in <code>/bin</code> (and <code>/sbin</code>).
          </li>
          <li>
            <code>/media</code>: Contains mount points (files which point to
            another file system, directory or file) for removable media. Any
            memory card or USB drive you insert into the system, will be
            accessible in a folder located in <code>/media</code>.
          </li>
          <li>
            <code>/mnt</code>: Contains mount points for temporarily mounted
            filesystems.
          </li>
          <li>
            <code>/opt</code>: Contains additional software packages.
          </li>
          <li>
            <code>/proc</code>: Contains process and kernel information
            (represented by files).
          </li>
          <li>
            <code>/root</code>: The home directory for the <code>root</code>{" "}
            (similar to <em>admin</em> in Windows) user.
          </li>
          <li>
            <code>/run</code>: Contains data related to system daemons (programs
            that do specific tasks in the background) and other variable,
            run-time data.
          </li>
          <li>
            <code>/sbin</code>: Contains system binaries (binary files essential
            for the whole system).
          </li>
          <li>
            <code>/srv</code>: Contains files used by servers running on the
            system.
          </li>
          <li>
            <code>/sys</code>: Contains important information about the device,
            device drivers and the kernel.
          </li>
          <li>
            <code>/tmp</code>: Contains temporary files.
          </li>
          <li>
            <code>/usr</code>: Contains a secondary heirarchy for read only user
            data. Usually has similar folders to <code>/</code> (
            <code>/usr/bin</code>, <code>/usr/lib</code>, <code>/usr/sbin</code>
            , etc) apart from others.
          </li>
          <li>
            <code>/var</code>: Contains variable files (logs, temporary e-mail
            files, etc).
          </li>
        </ul>
        <p>To check out the FHS on your system, type the following command:</p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}ls -l /{/*</CodeBlock>*/}
        </div>
        <p>
          <b>Note</b>
          <br />
          Some distributions choose to unify some directories by creating a{" "}
          <em>symlink</em> or a shortcut to the other folder.
          <br />
          For example, Pop!_OS (a derivative of Ubuntu and thus Debian) makes
          the following symlinks:
        </p>
        <ul>
          <li>
            <code>/lib</code> -&gt; <code>/usr/lib</code>
          </li>
          <li>
            <code>/lib32</code> -&gt; <code>/usr/lib32</code>
          </li>
          <li>
            <code>/lib64</code> -&gt; <code>/usr/lib64</code>
          </li>
          <li>
            <code>/libx32</code> -&gt; <code>/usr/libx32</code>
          </li>
          <li>
            <code>/sbin</code> -&gt; <code>/usr/sbin</code>
          </li>
        </ul>

        <h3>File types</h3>

        <h4>Plain Text</h4>
        <p>
          They contain normal text characters and are human-readable and
          editable. To create a new plain text file, you can use:
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}touch &lt;name&gt;{/*</CodeBlock>*/}
        </div>
        <h4>Binary</h4>
        <p>
          Binary files contain raw binary data. They aren't human
          readable/writable (unless you use some special software). They contain
          data other than text like, instructions for the CPU (executable
          files), music, video, etc. They are usually created by specialized
          software.
        </p>
        <h4>Directories</h4>
        <p>
          Directories contain other files and directories. To create a
          directory, use:
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}mkdir &lt;name&gt;{/*</CodeBlock>*/}
        </div>
        <h4>Symlinks</h4>
        <p>
          Symlinks or <em>Symbolic Links</em> are like shortcuts in windows,
          they link one file/directory to another.
        </p>
        <h5>Hard Links</h5>
        <p>
          A hard link cannot be created for a folder or file in a different
          filesystem (eg. ext4 to ntfs). Creating a hard symlink:
        </p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}ln &lt;target&gt; &lt;name&gt;{/*</CodeBlock>*/}
        </div>
        <h5>Soft Links</h5>
        <p>Soft links can be created to any file. Creating a soft symlink:</p>
        <div className="w-[20rem]  text-blue-300 rounded-md">
          {/*<CodeBlock>*/}ln -s &lt;target&gt; &lt;name&gt;{/*</CodeBlock>*/}
        </div>
      </section>
      <section className="text-gray-200 font-space mx-5 my-5 rounded-md px-5 py-5 bg-[#16161a]">
        <h2>Users, Groups and Permissions</h2>

        <h3>Users and Groups</h3>
        <h4>What are user accounts and why do we need them</h4>
        <ul>
          <li>
            There may be multiple users using the same system, the OS needs to
            differentiate (secuity and boundaries).
          </li>
          <li> Os uses a number to keep track of the user. </li>
          <li>Every file has a particular user assigned to it.</li>
          <li>To view a list of the users, cat the /etc/passwd file.</li>
        </ul>

        <h4> Types of users </h4>
        <ul>
          <li> Super User (For administrative purposes) </li>
          <li> System User (For processes) </li>
          <li>Regular User (Normal users with usernames and passwords)</li>
        </ul>

        <h4> Managing local users </h4>
        <ul>
          <li> Creating (useradd) </li>
          <li> Modifying (usermod) </li>
          <li> Deleting (userdel -r) </li>
          <li> Changing password (passwd [username]) </li>
        </ul>

        <h4> Handy commands </h4>
        <ul>
          <li>
            <code>whoami</code> : Prints the current users name
          </li>
          <li>
            <code>id</code> : Prints real and effective user and group ids
          </li>
          <li>
            <code>su</code> : Switch User
          </li>
          <li>
            <code>ps -au</code> : Snapshot of the current processes and the
            owner
          </li>
          <li>
            <code>ls -al</code> : Lists all files in a verbose manner
          </li>
        </ul>

        <h4> What are groups </h4>
        <ul>
          <li>
            Groups are a collection of users that share access to
            files/resources.
          </li>
          <li> Os uses a number to keep track of the group. </li>
          <li>
            System groups have GIDs between 0 and 999, keep this in mind while
            setting a GID manually.
          </li>
          <li> To view the groups, cat the /etc/group file. </li>
        </ul>

        <h4> Managing groups </h4>
        <ul>
          <li>
            Creating a group, a group must be created prior to adding users to
            it. Create a group by using the <code>groupadd</code> command.
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock>*/}groupadd -r [group_name].{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            Modifying a group, use groupmod.
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock>*/}groupmod -n [new_name] [old_name]
              {/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            Deleting a group, use the groupdel command. NOTE: You cannot delete
            a group if it is a users primary group.
          </li>
          <li>
            Adding users to a group, use the usermod command.
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock>*/}usermod -aG [group_name] [username]
              {/*</CodeBlock>*/}
            </div>
            G -&gt; secondary group. (the 'a' stands for append, if not
            supplied, it overwrites.)
          </li>
        </ul>

        <h3>Permissions</h3>
        <h4> What are permissions and how is it used </h4>
        <ul>
          <li>File permissions are used to control access to a file.</li>
          <li>
            There are 3 categories to a file permissions: 1. Owned by a user (u)
            2. Owned by a group (g) 3. Others (o)
          </li>
          <li>
            The most specific permission takes precedence. User perms &gt; group
            perms &gt; others.
          </li>
        </ul>

        <h4> Permission categories </h4>
        <ul>
          <li>
            r - Read (files -&gt; can read the contents, directories -&gt;
            contents may be listed out).
          </li>
          <li>
            w - Write (files -&gt; may be modified, directories -&gt; files may
            be added or deleted).
          </li>
          <li>
            x - Execute (files -&gt; may be run, directories -&gt; can be made
            pwd).
          </li>
        </ul>

        <h4> Changing permissions </h4>
        <ul>
          <li>
            We use the chmod command. There are 2 ways of going about this - the
            symbolic way and the numeric way (using the octal system). In the
            numeric way, each bit represents a group and _ _ _ for r,w,x; 1
            =&gt; enable, 0 =&gt;disable. Thus 0b(111) = 0o(7) -&gt; give r,w,x.
            0b(101) = 0o(5) -&gt; give r,x (no w).
          </li>
          <li>
            Eg: [symbolic]: (+ -&gt; give, - -&gt; remove){" "}
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock>*/}chmod go-rw file1{/*</CodeBlock>*/}
            </div>
          </li>
          <li>
            Eg: [Numeric] : (gives read, write, exec perms to everyone){" "}
            <div className="w-[20rem]  text-blue-300 rounded-md">
              {/*<CodeBlock>*/}chmod 777 file1{/*</CodeBlock>*/}
            </div>
          </li>
        </ul>

        <h4> Changing ownership </h4>
        <ul>
          <li>
            We change ownership using the <code>chown</code> command.
          </li>
          <li>
            chown new_owner file1, use -R to recursively change ownership in a
            directory.
          </li>
          <li>
            <code>chown :new_group some_dir</code>, changes the group owner ship
            (note the ':') to new_group, anything after the colon signifies the
            group.
          </li>
        </ul>

        <h4> Special permissions </h4>
        <ul>
          <li>
            a fourth permission type in addition to the basic user, group, and
            other types.
          </li>
          <li>
            1. [suid] u+s (Files: File executes as the user that owns the file,
            not the user that ran the file, Dirs: no effect).
          </li>
          <li>
            2. [sgid] g+s (Files: File execs as the group that owns the file,
            Dirs: newly created files have their group owner set to match the
            owner of the directory).
          </li>
          <li>
            3. [sticky] o+t (Files: No effect, Dirs: Users with write access to
            the directory can only remove files that they own).
          </li>
          <li>
            If this has ot be set numerically, a fourth preceding bit is used to
            denote it. setuid = 4; setgid = 2; sticky = 1.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Chapter_3;

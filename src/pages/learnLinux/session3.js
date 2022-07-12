import CodeBlock from '../../components/codeBlock/codeBlock';

export default function Session3() {
    return (
        <>
            <section>
                <h2>Files</h2>

                <h3>Filesystems</h3>
                <p>
                    Any operating system needs to access and manipulate the
                    files stored on the disk. However, for a computer, the data
                    for on a disk is just a big blob of 1's and 0's. The OS
                    needs to know which data is in which file and how to make
                    sense of it. To solve this, data on a file is stored
                    according to a set of rules called a <em>filesystem</em>.
                </p>

                <p>
                    There are a lot of filesystems out there, some major ones
                    are:
                </p>
                <ul>
                    <li>
                        FAT (File Allocation Table): An old filesystem used by
                        DOS and Windows. Nowadays, its used in portable storage
                        systems like memory cards and pendrives.
                    </li>
                    <li>
                        NTFS (New Technology File System): A propietary
                        filesystem used mainly by MS Windows.
                    </li>
                    <li>
                        EXT (EXTended file system) family(ext2, ext3, ext4):
                        Filesystems used by most Linux Distributions.
                    </li>
                </ul>

                <h3>Everything is a File</h3>
                <p>
                    In Linux systems a large number of resources like I/O
                    devices, network adapters, even processes are all
                    represented as files.
                </p>
                <p>
                    This means, programs can read from/write to these files and
                    the actual working of the hardware is abstracted.
                </p>

                <h3>The Filesystem Heirarchy Standard (FHS)</h3>
                <p>
                    Those of you familiar with Windows would be used to files
                    being stored in different <em>drives</em> shown by a letter.
                    Thus, the Windows file system is separated by disk, showing
                    its DOS heritage.
                </p>
                <p>
                    Linux's Filesystem Heirarchy is quite different. It is not
                    broken by drive and is a single tree. The <code>/</code>{' '}
                    directory, also called the <em>root</em> is the root of the
                    filesystem tree. Every file in the system is stored in the{' '}
                    <code>/</code> directory. Even if the files are stored on
                    separate partitions or separate disks, for the OS, they
                    appear in a single tree.
                </p>
                <p>
                    In the <code>/</code> directory, there is a (mostly)
                    standard set of directories. Some important directories
                    inside <code>/</code> are given below:
                </p>
                <ul>
                    <li>
                        <code>/bin</code>: Contains important{' '}
                        <em>binary files</em> needed for every user.
                    </li>
                    <li>
                        <code>/boot</code>: Contains the kernel, bootloaders and
                        other essential files to boot the system.
                    </li>
                    <li>
                        <code>/dev</code>: Contains <em>device files</em>. These
                        files are an interface to the drivers for those devices
                        (another example of everything is a file).
                    </li>
                    <li>
                        <code>/etc</code>: Contains system-wide configuration
                        files. So, if you don't know where a config file is
                        located, its worth looking in this directory.
                    </li>
                    <li>
                        <code>/home</code>: Contains the <em>home</em>{' '}
                        directories of all users.
                    </li>
                    <li>
                        <code>/lib.*</code>: Contains essential libraries used
                        by the binary files stored in <code>/bin</code> (and{' '}
                        <code>/sbin</code>).
                    </li>
                    <li>
                        <code>/media</code>: Contains mount points (files which
                        point to another file system, directory or file) for
                        removable media. Any memory card or USB drive you insert
                        into the system, will be accessible in a folder located
                        in <code>/media</code>.
                    </li>
                    <li>
                        <code>/mnt</code>: Contains mount points for temporarily
                        mounted filesystems.
                    </li>
                    <li>
                        <code>/opt</code>: Contains additional software
                        packages.
                    </li>
                    <li>
                        <code>/proc</code>: Contains process and kernel
                        information (represented by files).
                    </li>
                    <li>
                        <code>/root</code>: The home directory for the{' '}
                        <code>root</code> (similar to <em>admin</em> in Windows)
                        user.
                    </li>
                    <li>
                        <code>/run</code>: Contains data related to system
                        daemons (programs that do specific tasks in the
                        background) and other variable, run-time data.
                    </li>
                    <li>
                        <code>/sbin</code>: Contains system binaries (binary
                        files essential for the whole system).
                    </li>
                    <li>
                        <code>/srv</code>: Contains files used by servers
                        running on the system.
                    </li>
                    <li>
                        <code>/sys</code>: Contains important information about
                        the device, device drivers and the kernel.
                    </li>
                    <li>
                        <code>/tmp</code>: Contains temporary files.
                    </li>
                    <li>
                        <code>/usr</code>: Contains a secondary heirarchy for
                        read only user data. Usually has similar folders to{' '}
                        <code>/</code> (<code>/usr/bin</code>,{' '}
                        <code>/usr/lib</code>, <code>/usr/sbin</code>, etc)
                        apart from others.
                    </li>
                    <li>
                        <code>/var</code>: Contains variable files (logs,
                        temporary e-mail files, etc).
                    </li>
                </ul>
                <p>
                    To check out the FHS on your system, type the following
                    command:
                </p>
                <CodeBlock>ls -l /</CodeBlock>
                <p>
                    <b>Note</b>
                    <br />
                    Some distributions choose to unify some directories by
                    creating a <em>symlink</em> or a shortcut to the other
                    folder.
                    <br />
                    For example, Pop!_OS (a derivative of Ubuntu and thus
                    Debian) makes the following symlinks:
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
                    They contain normal text characters and are human-readable
                    and editable. To create a new plain text file, you can use:
                </p>
                <CodeBlock>touch &lt;name&gt;</CodeBlock>
                <h4>Binary</h4>
                <p>
                    Binary files contain raw binary data. They aren't human
                    readable/writable (unless you use some special software).
                    They contain data other than text like, instructions for the
                    CPU (executable files), music, video, etc. They are usually
                    created by specialized software.
                </p>
                <h4>Directories</h4>
                <p>
                    Directories contain other files and directories. To create a
                    directory, use:
                </p>
                <CodeBlock>mkdir &lt;name&gt;</CodeBlock>
                <h4>Symlinks</h4>
                <p>
                    Symlinks or <em>Symbolic Links</em> are like shortcuts in
                    windows, they link one file/directory to another.
                </p>
                <h5>Hard Links</h5>
                <p>
                    A hard link cannot be created for a folder or file in a
                    different filesystem (eg. ext4 to ntfs). Creating a hard
                    symlink:
                </p>
                <CodeBlock>ln &lt;target&gt; &lt;name&gt;</CodeBlock>
                <h5>Soft Links</h5>
                <p>
                    Soft links can be created to any file. Creating a soft
                    symlink:
                </p>
                <CodeBlock>ln -s &lt;target&gt; &lt;name&gt;</CodeBlock>
            </section>
            <section>
                <h2>Users, Groups and Permissions</h2>

                <h3>Users and Groups</h3>
                <h4>What are user accounts and why do we need them</h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            There may be multiple users using the same system,
                            the OS needs to differentiate (secuity and
                            boundaries).{' '}
                        </li>
                        <li> Os uses a number to keep track of the user. </li>
                        <li>
                            {' '}
                            Every file has a particular user assigned to it.{' '}
                        </li>
                        <li>
                            {' '}
                            To view a list of the users, cat the /etc/passwd
                            file.{' '}
                        </li>
                    </ul>
                </p>

                <h4> Types of users </h4>
                <p>
                    <ul>
                        <li> Super User (For administrative purposes) </li>
                        <li> System User (For processes) </li>
                        <li>
                            {' '}
                            Regular User (Normal users with usernames and
                            passwords){' '}
                        </li>
                    </ul>
                </p>

                <h4> Managing local users </h4>
                <p>
                    <ul>
                        <li> Creating (useradd) </li>
                        <li> Modifying (usermod) </li>
                        <li> Deleting (userdel -r) </li>
                        <li> Changing password (passwd [username]) </li>
                    </ul>
                </p>

                <h4> Handy commands </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            <code>whoami</code> : Prints the current users name{' '}
                        </li>
                        <li>
                            {' '}
                            <code>id</code> : Prints real and effective user and
                            group ids{' '}
                        </li>
                        <li>
                            {' '}
                            <code>su</code> : Switch User{' '}
                        </li>
                        <li>
                            {' '}
                            <code>ps -au</code> : Snapshot of the current
                            processes and the owner{' '}
                        </li>
                        <li>
                            {' '}
                            <code>ls -al</code> : Lists all files in a verbose
                            manner{' '}
                        </li>
                    </ul>
                </p>

                <h4> What are groups </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            Groups are a collection of users that share access
                            to files/resources.{' '}
                        </li>
                        <li> Os uses a number to keep track of the group. </li>
                        <li>
                            {' '}
                            System groups have GIDs between 0 and 999, keep this
                            in mind while setting a GID manually.{' '}
                        </li>
                        <li> To view the groups, cat the /etc/group file. </li>
                    </ul>
                </p>

                <h4> Managing groups </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            Creating a group, a group must be created prior to
                            adding users to it. Create a group by using the{' '}
                            <code>groupadd</code> command.
                            <CodeBlock>
                                {' '}
                                groupadd -r [group_name].{' '}
                            </CodeBlock>{' '}
                        </li>
                        <li>
                            {' '}
                            Modifying a group, use groupmod.{' '}
                            <CodeBlock>
                                {' '}
                                groupmod -n [new_name] [old_name]{' '}
                            </CodeBlock>{' '}
                        </li>
                        <li>
                            {' '}
                            Deleting a group, use the groupdel command. NOTE:
                            You cannot delete a group if it is a users primary
                            group.{' '}
                        </li>
                        <li>
                            {' '}
                            Adding users to a group, use the usermod command.{' '}
                            <CodeBlock>
                                {' '}
                                usermod -aG [group_name] [username]{' '}
                            </CodeBlock>{' '}
                            G -&gt; secondary group. (the 'a' stands for append,
                            if not supplied, it overwrites.){' '}
                        </li>
                    </ul>
                </p>

                <h3>Permissions</h3>
                <h4> What are permissions and how is it used </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            File permissions are used to control access to a
                            file.{' '}
                        </li>
                        <li>
                            {' '}
                            There are 3 categories to a file permissions: 1.
                            Owned by a user (u) 2. Owned by a group (g) 3.
                            Others (o){' '}
                        </li>
                        <li>
                            {' '}
                            The most specific permission takes precedence. User
                            perms &gt; group perms &gt; others.{' '}
                        </li>
                    </ul>
                </p>

                <h4> Permission categories </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            r - Read (files -&gt; can read the contents,
                            directories -&gt; contents may be listed out).{' '}
                        </li>
                        <li>
                            {' '}
                            w - Write (files -&gt; may be modified, directories
                            -&gt; files may be added or deleted).{' '}
                        </li>
                        <li>
                            {' '}
                            x - Execute (files -&gt; may be run, directories
                            -&gt; can be made pwd).{' '}
                        </li>
                    </ul>
                </p>

                <h4> Changing permissions </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            We use the chmod command. There are 2 ways of going
                            about this - the symbolic way and the numeric way
                            (using the octal system). In the numeric way, each
                            bit represents a group and _ _ _ for r,w,x; 1 =&gt;
                            enable, 0 =&gt;disable. Thus 0b(111) = 0o(7) -&gt;
                            give r,w,x. 0b(101) = 0o(5) -&gt; give r,x (no w).
                        </li>
                        <li>
                            {' '}
                            Eg: [symbolic]: (+ -&gt; give, - -&gt; remove){' '}
                            <CodeBlock>chmod go-rw file1</CodeBlock>{' '}
                        </li>
                        <li>
                            {' '}
                            Eg: [Numeric] : (gives read, write, exec perms to
                            everyone) <CodeBlock>
                                chmod 777 file1
                            </CodeBlock>{' '}
                        </li>
                    </ul>
                </p>

                <h4> Changing ownership </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            We change ownership using the <code>
                                chown
                            </code>{' '}
                            command.{' '}
                        </li>
                        <li>
                            {' '}
                            chown new_owner file1, use -R to recursively change
                            ownership in a directory.{' '}
                        </li>
                        <li>
                            {' '}
                            <code>chown :new_group some_dir</code>, changes the
                            group owner ship (note the ':') to new_group,
                            anything after the colon signifies the group.{' '}
                        </li>
                    </ul>
                </p>

                <h4> Special permissions </h4>
                <p>
                    <ul>
                        <li>
                            {' '}
                            a fourth permission type in addition to the basic
                            user, group, and other types.{' '}
                        </li>
                        <li>
                            {' '}
                            1. [suid] u+s (Files: File executes as the user that
                            owns the file, not the user that ran the file, Dirs:
                            no effect).{' '}
                        </li>
                        <li>
                            {' '}
                            2. [sgid] g+s (Files: File execs as the group that
                            owns the file, Dirs: newly created files have their
                            group owner set to match the owner of the
                            directory).{' '}
                        </li>
                        <li>
                            {' '}
                            3. [sticky] o+t (Files: No effect, Dirs: Users with
                            write access to the directory can only remove files
                            that they own).{' '}
                        </li>
                        <li>
                            {' '}
                            If this has ot be set numerically, a fourth
                            preceding bit is used to denote it. setuid = 4;
                            setgid = 2; sticky = 1.{' '}
                        </li>
                    </ul>
                </p>
            </section>
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
                    <ol>
                        <li>
                            {' '}
                            R: Running or Runnable state. A process starts with
                            this state as it attempts to complete its execution.{' '}
                        </li>
                        <li>
                            {' '}
                            S: Sleeping state. A process goes to this state when
                            it needs resources that are currently not available
                            (for e.g. waiting for user input). It automatically
                            comes out of sleep state when the resources are made
                            available by the CPU.{' '}
                        </li>
                        <li>
                            {' '}
                            D: Uninterruptable sleeping state. If a process
                            reaches this state, you can not kill the process or
                            suspend it. It will only be terminated after it
                            acquires the resource it is waiting for.
                        </li>
                        <li>
                            {' '}
                            T: Stopped or Traced state. This is a state where
                            the process is suspended temporarily due to multiple
                            reasons (maybe suspended by the user). You can
                            resume the process execution from this state by
                            bringing it to the running state again.{' '}
                        </li>
                        <li>
                            {' '}
                            Z: Zombie state. This is a state where the process
                            is orphaned. This happens when the parent process is
                            terminated before the child process. This process
                            will only be terminated when the <code>
                                init
                            </code>{' '}
                            process gets terminated.{' '}
                        </li>
                    </ol>
                </p>
                <h3> Process Monitoring </h3>
                <p>
                    Since every command/application is powered by processes in
                    the background, you can control the applications usage by
                    monitoring processes. <CodeBlock>htop</CodeBlock> command
                    shows you the list of all processes running and shows what
                    are the resources grabbed by them. It is a responsive
                    output, meaning it refreshes the list of output every 3
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
                    <CodeBlock>sleep 10000 &amp;</CodeBlock>
                </p>
                <p>
                    To list all the jobs running in background use command
                    <CodeBlock>jobs</CodeBlock>
                </p>
                <p>
                    To bring a job execution from background to foreground, use
                    command
                    <CodeBlock>fg %[jobnumber]</CodeBlock>
                </p>
                <p>
                    To push a job back into the background from foreground, use
                    command
                    <CodeBlock>Ctrl+Z</CodeBlock>
                </p>
            </section>
        </>
    );
}


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
                <p></p>

                <h3>Permissions</h3>
                <p></p>

                <h3></h3>
            </section>
            <section>
                <h2>Processes</h2>
            </section>
        </>
    );
}


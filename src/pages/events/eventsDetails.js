import speaker from '../../images/adrenaline/speaker.jpg';
import winnerOne from '../../images/adrenaline/winner-one.jpg';
import winnerTwo from '../../images/adrenaline/winner-two.jpg';

const imgStyle = {
    width: '100%',
    height: 'auto'
};

export const eventsDetails = [
    {
        number: '00',
        name: 'Adrenaline/FOSS Day',
        link: 'lugvitc.github.io/#/events#adrenaline',
        id: 'adrenaline',
        details: (
            <>
                <p>
                    Held on the 17th March, 2022, Adreanline/FOSS Day was a
                    one-day event for participants to show-off their familiarity
                    with open-source technologies. Participants gathered to
                    demonstrate their projects to an industry expert.
                </p>
                <img
                    loading='lazy'
                    style={imgStyle}
                    src={speaker}
                    alt='The guest speaker enlightening students about FOSS'
                />
                <p>
                    <br />A total of <strong>20 participants</strong> took part
                    with 1-3 pariticipants in each team. They used FOSS (free
                    and open-source software) resources from a number of fields
                    including computer vision, web scraping, web automation and
                    blockchain technologies.
                </p>
                The two winning teams were:
                <ol>
                    <li>
                        <em>
                            Inclusion of Persons with Disabilities in the
                            Technological World
                        </em>{' '}
                        by V Maheysh(19BCE1120), Suriyakrishnan S (19BCE1050)
                        and Mithun P (19BPS1092)
                        <br />
                        <br />
                        <img
                            loading='lazy'
                            style={imgStyle}
                            src={winnerOne}
                            alt='V Maheysh, Suriyakrishnan S and Mithun P receiving their prize'
                        />
                        <br />
                        <br />
                        They created an integrated system to accomodate persons
                        with disabilites in the tech world by using open-source
                        machine learning libraries. They targeted a wide range
                        of disabilities to make the system as inclusive as
                        possible. <br />
                    </li>
                    <br />
                    <li>
                        <em>
                            Decentralised Cloud Storage System Using Blockchain
                        </em>{' '}
                        by Divyashree S (19BCE1689), Aravinda B (19BCE1190) and
                        Amudhini P K (19BCE1492)
                        <br />
                        <br />
                        <img
                            loading='lazy'
                            style={imgStyle}
                            src={winnerTwo}
                            alt='Divyashree S, Aravinda B and Amudhini P K receiving their prize'
                        />
                        <br />
                        <br />
                        They created a system of encrypted storage by utilising
                        popular blockchain technologies. <br />
                    </li>
                </ol>
                <p>
                    The event was a success with the students learning about the
                    importance of FOSS and getting to know the numerous avenues
                    where open-source tools are used.
                </p>
            </>
        )
    },
    {
        number: '01',
        name: 'Rescue Tux',
        link: 'lugvitc.github.io/#/events#rescue-tux',
        id: 'rescue-tux',
        details: (
            <>
                <p>
                    The Linux Club at VIT Chennai organized the{' '}
                    <i>Rescue Tux</i> event on 21st August 2022,{' '}
                    <strong>sponsored by GeeksForGeeks</strong>. The event saw
                    the participation of about <strong>180 attendees</strong>,
                    who enjoyed a Linux workshop by the club's President
                    Beleswar Prasad Padhi and Vice President Samridh Anand
                    Paatni, followed by lunch. The participants also took part
                    in a CTF event featuring challenges created by LUG members,
                    with the CTF platform developed by the VP and President.
                    Finally, the winners of the CTF were awarded prizes.
                </p>
                <p>
                    The top three teams that emerged victorious were as follows:
                </p>
                <ol>
                    <li>
                        Team <strong>EchoHelloWorld</strong>, who received a
                        prize of X rs.
                    </li>
                    <li>
                        Team <strong>X</strong>, who received a prize of X rs.
                    </li>
                    <li>
                        Team <strong>X</strong>, who received a prize of X rs.
                    </li>
                </ol>
            </>
        )
    },
    {
        number: '02',
        name: 'Cyber-0-Day',
        link: 'lugvitc.github.io/#/events#cyber-0-day',
        id: 'cyber-0-day',
        details: (
            <>
                <p>
                    The Linux Club at VIT Chennai, in collaboration with The
                    Tech-Researchers Club, organized the <i>Cyber-0-Day</i>{' '}
                    event from 24th to 25th September 2022. The event saw the
                    participation of around <strong>100 participants</strong> in
                    teams of 1-3, and was <strong>sponsored by Rapido</strong>.
                    The event began with a Linux workshop by the President
                    Beleswar Prasad Padhi and Vice President Samridh Anand
                    Paatni, followed by a cybersecurity quiz and lunch.
                </p>
                <p>
                    Later, participants enjoyed a CTF+Bug Bounty challenge,
                    created by LUG members and featuring a CTF platform
                    developed by the club. After the scores were tallied, the
                    top 10 teams were selected to participate in a 12-hour
                    hackathon that tested their technical cybersecurity
                    knowledge, with problem statements on{' '}
                    <i>API Testing Platforms</i> and{' '}
                    <i>Network Monitoring Tools</i>. Finally, the winners of the
                    event were awarded their prizes in the Nethaji Auditorium.
                </p>
                <p>
                    The top three teams that emerged victorious were as follows:
                </p>
                <ol>
                    <li>
                        Team <strong>EchoHelloWorld</strong> (Zehran 21BPS1091,
                        Christeo 21BCE1635 & Aditya 21BCE1431), who received a
                        prize of X rs.
                    </li>
                    <li>
                        Team <strong>HailAlan</strong> (Kushal Agrawal
                        22BPS1141, Ansh Sharma 22BCE1338 & Shashwat Mishra
                        22BCE1853), who received a prize of X rs.
                    </li>
                    <li>
                        Team <strong>chill_sette</strong> (Naman 21BCE5852, Yash
                        Singh 21BCE5760 & Sagar 21BCE5790), who received a prize
                        of X rs.
                    </li>
                </ol>
            </>
        )
    },
    {
        number: '03',
        name: "Hackers' Horizon",
        link: 'lugvitc.github.io/#/events#hackers-horizon',
        id: 'hackers-horizon',
        details: <>Hackers' Horizon</>
    }
];

